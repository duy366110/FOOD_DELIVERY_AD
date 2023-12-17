import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoleRoutingModule } from './dashboard-role-routing.module';
import { DashboardRoleComponent } from './dashboard-role.component';
import { DashboardRoleMainComponent } from './dashboard-role-main/dashboard-role-main.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { DashboardRoleEditComponent } from './dashboard-role-edit/dashboard-role-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';


@NgModule({
  declarations: [
    DashboardRoleComponent,
    DashboardRoleMainComponent,
    DashboardRoleNewComponent,
    DashboardRoleEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoleRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidatorService
  ]
})
export class DashboardRoleModule { }
