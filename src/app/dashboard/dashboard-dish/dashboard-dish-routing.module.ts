import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDishComponent } from './dashboard-dish.component';
import { DashboardDishMainComponent } from './dashboard-dish-main/dashboard-dish-main.component';
import { DashboardDishNewComponent } from './dashboard-dish-new/dashboard-dish-new.component';
import { DashboardDishEditComponent } from './dashboard-dish-edit/dashboard-dish-edit.component';
import { ResolveAllCategoryService } from 'src/app/services/resolve-all/resolve-all-category.service';
import { ResolveDishAmountService } from 'src/app/services/resolve-amount/resolve-dish-amount.service';
import { ResolveIdDishService } from 'src/app/services/resolve-id/resolve-id-dish.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardDishComponent,
    children: [
      {
        path: "",
        resolve: {amount: ResolveDishAmountService},
        component: DashboardDishMainComponent
      },
      {
        path: "new",
        resolve: {categories: ResolveAllCategoryService},
        component: DashboardDishNewComponent
      },
      {
        path: "edit/:id",
        resolve: {
          dish: ResolveIdDishService,
          categories: ResolveAllCategoryService
        },
        component: DashboardDishEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDishRoutingModule { }
