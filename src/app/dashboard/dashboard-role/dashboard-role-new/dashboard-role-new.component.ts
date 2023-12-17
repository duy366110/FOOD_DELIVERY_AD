import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role-new',
  templateUrl: './dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-new.component.scss']
})
export class DashboardRoleNewComponent implements OnInit, OnDestroy {

  roleForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl("", [this.serviceValidator.require()]);

  submit: boolean = false;
  url: string = `${environment.api.url}role/new`;

  constructor(
    public fb: FormBuilder,
    public serviceValidator: ValidatorService,
    public serviceHttp: CommonHttpService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.roleForm = this.fb.group({
      name: this.name
    })
  }

  onSubmitHandler(event: any): void {
    event.preventDefault();
    this.submit = true;
    if(this.roleForm.status === "VALID") {
      this.submit = false;
      console.log(this.roleForm.value);
      this.serviceHttp.post(this.url, this.roleForm.value)
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (error: any) => {
          console.log(error);
        })

    }
  }

  ngOnDestroy(): void {

  }
}
