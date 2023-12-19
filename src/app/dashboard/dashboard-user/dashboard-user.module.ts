import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserMainComponent } from './dashboard-user-main/dashboard-user-main.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';


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
  ]
})
export class DashboardUserModule { }
