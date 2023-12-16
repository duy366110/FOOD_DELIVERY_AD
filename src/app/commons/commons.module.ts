import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonInputComponent } from './common-input-component/common-input.component';
import { CommonHeaderComponent } from './common-header-component/common-header.component';
import { CommonHeaderTableftComponent } from './common-header-component/common-header-tableft-component/common-header-tableft.component';
import { CommonSidebarComponent } from './common-sidebar-component/common-sidebar.component';


@NgModule({
  declarations: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonHeaderTableftComponent,
    CommonSidebarComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonSidebarComponent
  ]
})
export class CommonsModule { }
