import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';

@Component({
  selector: 'app-dashboard-user-new',
  templateUrl: './dashboard-user-new.component.html',
  styleUrls: ['./dashboard-user-new.component.scss']
})
export class DashboardUserNewComponent implements OnInit, OnDestroy {

  userForm: FormGroup = new FormGroup({});
  fullName: FormControl = new FormControl("", []);
  email: FormControl = new FormControl("", []);
  password: FormControl = new FormControl("", []);
  phone: FormControl = new FormControl("", []);
  address: FormControl = new FormControl("", []);

  nameBtnSubmit: string = "Create user";
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private serviceValidator: ValidatorService
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
      address: this.address
    })
  }

  onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;
    if(this.userForm.status === "VALID") {
      this.submit = false;
      console.log(this.userForm.value);

    }
  }

  ngOnDestroy(): void {

  }
}
