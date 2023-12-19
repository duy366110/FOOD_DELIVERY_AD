import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserMainComponent } from './dashboard-user-main/dashboard-user-main.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { ResolveAllRoleService } from 'src/app/services/resolve-all/resolve-all-role.service';
import { ResolveUserAmountService } from 'src/app/services/resolve-amount/resolve-user-amount.service';
import { ResolveIdUserService } from 'src/app/services/resolve-id/resolve-id-user.service';

const routes: Routes = [
  {
    path: "",
    component: DashboardUserComponent,
    children: [
      {
        path: "",
        resolve: {amount: ResolveUserAmountService},
        component: DashboardUserMainComponent
      },
      {
        path: "new",
        resolve: {roles: ResolveAllRoleService},
        component: DashboardUserNewComponent
      },
      {
        path: "edit/:id",
        resolve: {
          user: ResolveIdUserService,
          roles: ResolveAllRoleService
        },
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
