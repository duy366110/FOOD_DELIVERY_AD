import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-user-new',
  templateUrl: './dashboard-user-new.component.html',
  styleUrls: ['./dashboard-user-new.component.scss']
})
export class DashboardUserNewComponent implements OnInit, OnDestroy {

  userForm: FormGroup = new FormGroup({});
  fullName: FormControl = new FormControl("", [this.serviceValidator.require()]);
  email: FormControl = new FormControl("", [this.serviceValidator.email()]);
  password: FormControl = new FormControl("", [this.serviceValidator.password()]);
  phone: FormControl = new FormControl("", [this.serviceValidator.require(), this.serviceValidator.phone()]);
  address: FormControl = new FormControl("", [this.serviceValidator.require()]);
  roles: FormControl = new FormControl("", [this.serviceValidator.require()]);

  nameBtnSubmit: string = "Create user";
  submit: boolean = false;

  url: string = `${environment.api.url}${environment.api.user.new}`;
  serviceHttpSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviceValidator: ValidatorService,
    private serviceHttp: CommonHttpService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.userForm = this.fb.group({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      roles: this.roles
    })
  }

  onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;
    if(this.userForm.status === "VALID") {
      this.submit = false;
      console.log(this.userForm.value);

      this.serviceHttpSub = this.serviceHttp.post(this.url, this.userForm.value)
      .subscribe(
        (res: any) => {

          let { status, message }= res;
          if(status) {
            this.userForm.reset();
            this.router.navigate(['/user']);
          }
        })

    }
  }

  ngOnDestroy(): void {
    this.serviceHttpSub.unsubscribe();
  }
}
