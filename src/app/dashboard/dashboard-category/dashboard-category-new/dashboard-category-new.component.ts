import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-new',
  templateUrl: './dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-new.component.scss']
})
export class DashboardCategoryNewComponent implements OnInit, OnDestroy {

  url: string = `${environment.api.url}${environment.api.category.new}`;
  categoryForm: FormGroup = new FormGroup({});
  title: FormControl = new FormControl("", []);
  titleSub: FormControl = new FormControl("", []);
  desc: FormControl = new FormControl("", []);
  thumb: FormControl | any = new FormControl("", []);

  submit: boolean = false;
  nameBtnSubmit: string = "Create category";

  serviceHttpSub: Subscription = new Subscription();

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public serviceHttp: CommonHttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.categoryForm = this.fb.group({
      title: this.title,
      titleSub: this.titleSub,
      desc: this.desc,
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();
    

    if(this.categoryForm.status === "VALID") {
      let CategoryForm = new FormData();
      if(this.thumb.hasOwnProperty('files') && this.thumb.files.length) {
        for(let file of this.thumb.files) {
          CategoryForm.append('thumb', file);
        }
      }

      Object.keys(this.categoryForm.value).forEach((key: string) => {
        CategoryForm.append(key, this.categoryForm.value[key]);
      })

      let res = await fetch(this.url, {
        method: 'POST',
        body: CategoryForm
      })

      let data = await res.json();
      let { status, message} = data;

      if(status) {
        this.categoryForm.reset();
        this.router.navigate(['/category']);
      }

    }
  }

  ngOnDestroy(): void {

  }

}
