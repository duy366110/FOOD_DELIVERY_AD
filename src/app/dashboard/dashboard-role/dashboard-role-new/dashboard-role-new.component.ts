import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-role-new',
  templateUrl: './dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-new.component.scss']
})
export class DashboardRoleNewComponent implements OnInit, OnDestroy {

  roleForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl("", []);

  constructor(
    public fb: FormBuilder
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
    console.log("Admin create role");
  }

  ngOnDestroy(): void {

  }
}
