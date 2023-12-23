import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { ResolveRoleAmountService } from '../services/resolve-amount/resolve-role-amount.service';
import { ResolveUserAmountService } from '../services/resolve-amount/resolve-user-amount.service';
import { ResolveCategoryAmountService } from '../services/resolve-amount/resolve-category-amount.service';
import { ResolveDishAmountService } from '../services/resolve-amount/resolve-dish-amount.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        resolve: {
          role: ResolveRoleAmountService,
          user: ResolveUserAmountService,
          category: ResolveCategoryAmountService,
          dish: ResolveDishAmountService
        },
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
      },
      {
        path: "dish",
        loadChildren: (() => import("../dashboard/dashboard-dish/dashboard-dish.module").then((m) => m.DashboardDishModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
