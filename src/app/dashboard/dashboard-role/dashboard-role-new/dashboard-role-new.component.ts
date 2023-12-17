import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  serviceHttpSub: Subscription = new Subscription();

  constructor(
    public router: Router,
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

      this.serviceHttpSub = this.serviceHttp.post(this.url, this.roleForm.value)
      .subscribe(
        (res: any) => {

          let { status, message }= res;
          if(status) {
            this.roleForm.reset();
            this.router.navigate(['/role']);
          }
        })
    }
  }

  ngOnDestroy(): void {
    this.serviceHttpSub.unsubscribe();
  }
}
