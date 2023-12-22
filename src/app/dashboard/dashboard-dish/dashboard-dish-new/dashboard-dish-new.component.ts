import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceHttpCustomService } from 'src/app/services/service-http-custom/service-http-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-dish-new',
  templateUrl: './dashboard-dish-new.component.html',
  styleUrls: ['./dashboard-dish-new.component.scss']
})
export class DashboardDishNewComponent {

  url: string = `${environment.api.url}${environment.api.dish.new}`;
  dishForm: FormGroup = new FormGroup({});
  category: FormControl = new FormControl("", []);
  title: FormControl = new FormControl("", []);
  titleSub: FormControl = new FormControl("", []);
  desc: FormControl = new FormControl("", []);
  price: FormControl = new FormControl("", []);
  thumb: FormControl | any = new FormControl("", []);

  categories: Array<any> = [];
  submit: boolean = false;
  nameBtnSubmit: string = "Create dish";

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public fb: FormBuilder,
    public serviceHttpCustom: ServiceHttpCustomService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      let { status, message, categories } = data.categories;
      if(status) {
        this.categories = categories.map((role: any) => {
          return {
            id: role._id,
            value: role.title
          }
        })
      }
    })

    this.createForm();
  }

  createForm(): void {
    this.dishForm = this.fb.group({
      title: this.title,
      titleSub: this.titleSub,
      desc: this.desc,
      price: this.price,
      category: this.category
    })
  }

  async onSubmitHandler(event: any) {
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

      this.serviceHttpCustom.post(this.url, DishForm, (information: any) => {
        let { status, message} = information;

        if(status) {
          this.dishForm.reset();
          this.router.navigate(['/dish']);
        }
      })
    }
  }

  ngOnDestroy(): void {}

}
