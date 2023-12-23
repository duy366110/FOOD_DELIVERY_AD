import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CommonsModule } from '../commons/commons.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule,
    MatIconModule
  ]
})
export class DashboardModule { }
