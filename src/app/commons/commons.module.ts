import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonInputComponent } from './common-input-component/common-input.component';
import { CommonHeaderComponent } from './common-header-component/common-header.component';
import { CommonHeaderTableftComponent } from './common-header-component/common-header-tableft-component/common-header-tableft.component';
import { CommonSidebarComponent } from './common-sidebar-component/common-sidebar.component';
import { CommonBreadcrumbComponent } from './common-breadcrumb-component/common-breadcrumb.component';
import { CommonButtonComponent } from './common-button-component/common-button.component';
import { CommonFooterComponent } from './common-footer-component/common-footer.component';
import { CommonLoaderComponent } from './common-loader-component/common-loader.component';
import { CommonMessageComponent } from './common-message-component/common-message.component';
import { CommonPaginationComponent } from './common-pagination-component/common-pagination.component';
import { CommonTableComponent } from './common-table-component/common-table.component';
import { CommonSelectComponent } from './common-select-component/common-select-component.component';


@NgModule({
  declarations: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonHeaderTableftComponent,
    CommonSidebarComponent,
    CommonBreadcrumbComponent,
    CommonButtonComponent,
    CommonFooterComponent,
    CommonLoaderComponent,
    CommonMessageComponent,
    CommonPaginationComponent,
    CommonTableComponent,
    CommonSelectComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CommonInputComponent,
    CommonHeaderComponent,
    CommonSidebarComponent,
    CommonBreadcrumbComponent,
    CommonButtonComponent,
    CommonFooterComponent,
    CommonLoaderComponent,
    CommonMessageComponent,
    CommonPaginationComponent,
    CommonTableComponent,
    CommonSelectComponent
  ]
})
export class CommonsModule { }
