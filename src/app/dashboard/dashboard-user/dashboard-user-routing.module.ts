import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserMainComponent } from './dashboard-user-main/dashboard-user-main.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardUserComponent,
    children: [
      {
        path: "",
        component: DashboardUserMainComponent
      },
      {
        path: "new",
        component: DashboardUserNewComponent
      },
      {
        path: "edit/:id",
        component: DashboardUserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
