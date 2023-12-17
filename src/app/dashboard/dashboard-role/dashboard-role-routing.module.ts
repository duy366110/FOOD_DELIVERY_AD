import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoleComponent } from './dashboard-role.component';
import { DashboardRoleMainComponent } from './dashboard-role-main/dashboard-role-main.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { ResolveRoleAmountService } from 'src/app/services/resolve-amount/resolve-role-amount.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardRoleComponent,
    children: [
      {
        path: "",
        resolve: {amount: ResolveRoleAmountService},
        component: DashboardRoleMainComponent
      },
      {
        path: "new",
        component: DashboardRoleNewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoleRoutingModule { }
