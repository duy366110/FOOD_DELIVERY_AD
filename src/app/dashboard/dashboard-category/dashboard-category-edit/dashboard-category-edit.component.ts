import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardCategoryNewComponent } from '../dashboard-category-new/dashboard-category-new.component';
import { FormBuilder } from '@angular/forms';
import { ServiceHttpCustomService } from 'src/app/services/service-http-custom/service-http-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-edit',
  templateUrl: '../dashboard-category-new/dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-edit.component.scss']
})
export class DashboardCategoryEditComponent extends DashboardCategoryNewComponent implements OnInit, OnDestroy {

  override url: string = `${environment.api.url}${environment.api.category.update}`;
  dataSub: Subscription = new Subscription();
  category: any;

  constructor(
    public route: ActivatedRoute,
    router: Router,
    fb: FormBuilder,
    serviceHttpCustom: ServiceHttpCustomService
  ) {
    super(router, fb, serviceHttpCustom)
  }

  override ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { status, message, category } = data.category;
      if(status) {
        this.category = category;
        this.title.setValue(category.title);
        this.titleSub.setValue(category.titleSub);
        this.desc.setValue(category.desc);
      }
    })

    this.createForm();
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.categoryForm.status === "VALID") {
      this.submit = false;
      let CategoryForm = new FormData();

      if(this.thumb.hasOwnProperty('files') && this.thumb.files.length) {
        for(let file of this.thumb.files) {
          CategoryForm.append('thumb', file);
        }
      }

      Object.keys(this.categoryForm.value).forEach((key: string) => {
        CategoryForm.append(key, this.categoryForm.value[key]);
      })

      CategoryForm.append('category', this.category._id);

      await this.serviceHttpCustom.post(this.url, CategoryForm, (information: any) => {
        let { status, message} = information;

        if(status) {
          this.categoryForm.reset();
          this.router.navigate(['/category']);
        }
      })
    }
  }

  override ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
