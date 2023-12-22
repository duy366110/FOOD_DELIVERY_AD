import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCategoryComponent } from './dashboard-category.component';
import { DashboardCategoryMainComponent } from './dashboard-category-main/dashboard-category-main.component';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';
import { ResolveCategoryAmountService } from 'src/app/services/resolve-amount/resolve-category-amount.service';
import { ResolveIdCategoryService } from 'src/app/services/resolve-id/resolve-id-category.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardCategoryComponent,
    children: [
      {
        path: "",
        resolve: {amount: ResolveCategoryAmountService},
        component: DashboardCategoryMainComponent
      },
      {
        path: "new",
        component: DashboardCategoryNewComponent
      },
      {
        path: "edit/:id",
        resolve: {category: ResolveIdCategoryService},
        component: DashboardCategoryEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCategoryRoutingModule { }
