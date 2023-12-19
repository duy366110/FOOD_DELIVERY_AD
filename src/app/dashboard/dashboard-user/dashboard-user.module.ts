import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonsModule } from 'src/app/commons/commons.module';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserMainComponent } from './dashboard-user-main/dashboard-user-main.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { ValidatorService } from 'src/app/services/service-validator/validator.service';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';


@NgModule({
  declarations: [
    DashboardUserComponent,
    DashboardUserMainComponent,
    DashboardUserNewComponent,
    DashboardUserEditComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidatorService,
    CommonHttpService
  ]
})
export class DashboardUserModule { }
