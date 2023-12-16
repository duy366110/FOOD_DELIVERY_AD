import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import {MatButtonModule} from '@angular/material/button';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonInputComponent } from './common-input-component/common-input.component';
import { CommonHeaderComponent } from './common-header-component/common-header.component';
import { CommonHeaderTableftComponent } from './common-header-component/common-header-tableft-component/common-header-tableft.component';
import { CommonSidebarComponent } from './common-sidebar-component/common-sidebar.component';
import { CommonBreadcrumbComponent } from './common-breadcrumb-component/common-breadcrumb.component';
import { CommonButtonComponent } from './common-button-component/common-button.component';


@NgModule({
  declarations: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonHeaderTableftComponent,
    CommonSidebarComponent,
    CommonBreadcrumbComponent,
    CommonButtonComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonSidebarComponent,
    CommonBreadcrumbComponent,
    CommonButtonComponent
  ]
})
export class CommonsModule { }
