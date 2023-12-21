import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCategoryComponent } from './dashboard-category.component';
import { DashboardCategoryMainComponent } from './dashboard-category-main/dashboard-category-main.component';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardCategoryComponent,
    children: [
      {
        path: "",
        component: DashboardCategoryMainComponent
      },
      {
        path: "new",
        component: DashboardCategoryNewComponent
      },
      {
        path: "edit/:id",
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
