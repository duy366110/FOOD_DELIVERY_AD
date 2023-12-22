import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDishRoutingModule } from './dashboard-dish-routing.module';
import { DashboardDishComponent } from './dashboard-dish.component';
import { DashboardDishMainComponent } from './dashboard-dish-main/dashboard-dish-main.component';
import { DashboardDishNewComponent } from './dashboard-dish-new/dashboard-dish-new.component';
import { DashboardDishEditComponent } from './dashboard-dish-edit/dashboard-dish-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceHttpCustomService } from 'src/app/services/service-http-custom/service-http-custom.service';


@NgModule({
  declarations: [
    DashboardDishComponent,
    DashboardDishMainComponent,
    DashboardDishNewComponent,
    DashboardDishEditComponent
  ],
  imports: [
    CommonModule,
    DashboardDishRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceHttpCustomService
  ]
})
export class DashboardDishModule { }
