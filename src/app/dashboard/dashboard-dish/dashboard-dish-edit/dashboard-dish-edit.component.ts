import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceHttpCustomService } from 'src/app/services/service-http-custom/service-http-custom.service';
import { DashboardDishNewComponent } from '../dashboard-dish-new/dashboard-dish-new.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-dish-edit',
  templateUrl: '../dashboard-dish-new/dashboard-dish-new.component.html',
  styleUrls: ['./dashboard-dish-edit.component.scss']
})
export class DashboardDishEditComponent extends DashboardDishNewComponent {

  override url: string = `${environment.api.url}${environment.api.dish.update}`;
  dataSub: Subscription = new Subscription();
  dish: any;

  override nameBtnSubmit: string = "Update dish";

  constructor(
    route: ActivatedRoute,
    router: Router,
    fb: FormBuilder,
    serviceHttpCustom: ServiceHttpCustomService
  ) {
    super(route, router, fb, serviceHttpCustom)
  }

  override ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { status, dish } = data.dish;
      let { categories } = data.categories;

      if(status) {
        this.categories = categories.map((role: any) => {
          return {
            id: role._id,
            value: role.title
          }
        })

        this.dish = dish;
        this.title.setValue(dish.title);
        this.titleSub.setValue(dish.titleSub);
        this.desc.setValue(dish.desc);
        this.category.setValue(dish.category);
        this.price.setValue(dish.price.$numberDecimal);
      }
    })

    this.createForm();
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();
    

    if(this.dishForm.status === "VALID") {
      let DishForm = new FormData();

      if(this.thumb.hasOwnProperty('files') && this.thumb.files.length) {
        for(let file of this.thumb.files) {
          DishForm.append('thumb', file);
        }
      }

      Object.keys(this.dishForm.value).forEach((key: string) => {
        DishForm.append(key, this.dishForm.value[key]);
      })

      DishForm.append('dish', this.dish._id);

      this.serviceHttpCustom.post(this.url, DishForm, (information: any) => {
        let { status, message} = information;

        if(status) {
          this.dishForm.reset();
          this.router.navigate(['/dish']);
        }
      })
    }
  }

  override ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }


}
