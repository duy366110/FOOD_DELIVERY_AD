import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { signin } from 'src/app/store/store-user/store-user-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit, OnDestroy {  
  siginForm: FormGroup = new FormGroup({});
  email: FormControl = new FormControl("", [this.serviceValidator.require(), this.serviceValidator.email()]);
  password: FormControl = new FormControl("", [this.serviceValidator.require(), this.serviceValidator.password()]);

  formMessage: any = null;

  signinSub: Subscription = new Subscription();
  signinSubmit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceValidator: ValidatorService,
    private serviceHttp: CommonHttpService,
    private store: Store<{user: any}>
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.siginForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  onSigninHandler(event: any): void {
    event.preventDefault();
    this.signinSubmit = true;

    if(this.siginForm.status === "VALID") {
      let url: string = environment.api.url;
      url = url.replace(/admin\//g, environment.api.access.signin);

      this.signinSubmit = false;

      this.serviceHttp.post(url, this.siginForm.value).subscribe(
        (res: any) => {
          const {status, message, metadata } = res;

          if(status) {
            this.siginForm.reset();
            this.store.dispatch(signin(metadata));
            this.router.navigate(['/']);
  
          } else {
            this.formMessage = message;
          }
        })
    }
  }

  ngOnDestroy() {
    this.signinSub.unsubscribe();
  }
}
