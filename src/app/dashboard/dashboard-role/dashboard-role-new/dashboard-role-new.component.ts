import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';

@Component({
  selector: 'app-dashboard-role-new',
  templateUrl: './dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-new.component.scss']
})
export class DashboardRoleNewComponent implements OnInit, OnDestroy {

  roleForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl("", [this.serviceValidator.require()]);

  submit: boolean = false;

  constructor(
    public fb: FormBuilder,
    private serviceValidator: ValidatorService
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

    }
  }

  ngOnDestroy(): void {

  }
}
