import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCategoryRoutingModule } from './dashboard-category-routing.module';
import { DashboardCategoryComponent } from './dashboard-category.component';
import { DashboardCategoryMainComponent } from './dashboard-category-main/dashboard-category-main.component';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';


@NgModule({
  declarations: [
    DashboardCategoryComponent,
    DashboardCategoryMainComponent,
    DashboardCategoryNewComponent,
    DashboardCategoryEditComponent
  ],
  imports: [
    CommonModule,
    DashboardCategoryRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonHttpService
  ]
})
export class DashboardCategoryModule { }
