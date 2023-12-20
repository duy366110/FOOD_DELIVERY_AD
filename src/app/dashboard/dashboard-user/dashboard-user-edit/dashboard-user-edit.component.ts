import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardUserNewComponent } from '../dashboard-user-new/dashboard-user-new.component';
import { FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-user-edit',
  templateUrl: '../dashboard-user-new/dashboard-user-new.component.html',
  styleUrls: ['./dashboard-user-edit.component.scss']
})
export class DashboardUserEditComponent extends DashboardUserNewComponent implements OnInit, OnDestroy {

  override url: string = `${environment.api.url}${environment.api.user.update}`;
  dataSub: Subscription = new Subscription();
  override isPassword: boolean = false;
  user: any = {};

  constructor(
    router: Router,
    route: ActivatedRoute,
    fb: FormBuilder,
    serviceValidator: ValidatorService,
    serviceHttp: CommonHttpService
  ) {
    super(router, route, fb, serviceValidator, serviceHttp);
  }

  override ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { roles} = data.roles;
      let { user } = data.user;
      Object.assign(this.user, user);

      if(roles.length) {
        this.roles = roles.map((role: any) => {
          return {
            id: role._id,
            value: role.name
          }
        })
      }
      this.createForm();
    })
  }


  override createForm(): void {
    this.userForm = this.fb.group({
      fullName: this.fullName,
      email: this.email,     
      phone: this.phone,
      address: this.address,
      role: this.role
    })

    Object.keys(this.userForm.controls).forEach((key: string) => {
      if(key !== 'role') {
        this.userForm.controls[key].setValue(this.user[key]);
      }
    })

    this.userForm.controls['role'].setValue(this.user.role._id);
  }

  override onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.userForm.status === "VALID") {
      this.submit = false;
      let { id } = this.route.snapshot.params;
      this.userForm.value.id = id;

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

  override ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
