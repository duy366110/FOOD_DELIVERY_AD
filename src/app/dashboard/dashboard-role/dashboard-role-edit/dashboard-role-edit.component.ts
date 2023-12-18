import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { DashboardRoleNewComponent } from '../dashboard-role-new/dashboard-role-new.component';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role-edit',
  templateUrl: '../dashboard-role-new/dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-edit.component.scss']
})
export class DashboardRoleEditComponent extends DashboardRoleNewComponent implements OnInit, OnDestroy {

  override nameBtnSubmit = "Update role";
  override name: FormControl = new FormControl("", [this.serviceValidator.require()]);
  override url: string = `${environment.api.url}${environment.api.role.update}`;

  role: any = {};
  routeDataSub: Subscription = new Subscription();

  constructor(
    router: Router,
    public route: ActivatedRoute,
    fb: FormBuilder,
    serviceValidator: ValidatorService,
    serviceHttp: CommonHttpService
  ) {
    super(router, fb, serviceValidator, serviceHttp);
  }

  override ngOnInit(): void {
    this.routeDataSub = this.route.data.subscribe((data: any) => {
      let { status, message, role } = data.role;
      this.role = role;
      this.name.setValue(role.name);
    })
    this.routeDataSub.unsubscribe();
    this.createForm();
  }

  override onSubmitHandler(event: any): void {
    this.submit = true;

    if(this.roleForm.status === "VALID") {
      this.submit = false;

      this.serviceHttpSub = this.serviceHttp.post(this.url, {id: this.role._id, ...this.roleForm.value})
      .subscribe(
        (res: any) => {
          let { status, message }= res;
          if(status) {
            this.router.navigate(['/role']);
          }
        })
    }
  }

  override ngOnDestroy(): void {
    this.serviceHttpSub.unsubscribe();
  }

}
