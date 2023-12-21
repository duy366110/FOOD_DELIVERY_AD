import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashboardMainComponent
      },
      {
        path: "role",
        loadChildren: (() => import("../dashboard/dashboard-role/dashboard-role.module").then((m) => m.DashboardRoleModule))
      },
      {
        path: "user",
        loadChildren: (() => import("../dashboard/dashboard-user/dashboard-user.module").then((m) => m.DashboardUserModule))
      },
      {
        path: "category",
        loadChildren: (() => import("../dashboard/dashboard-category/dashboard-category.module").then((m) => m.DashboardCategoryModule)),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
