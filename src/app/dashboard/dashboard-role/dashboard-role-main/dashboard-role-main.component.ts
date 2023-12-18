import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { loadInitRolePagination, updateStatusPage } from 'src/app/store/store-pagination/store-pagination-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role-main',
  templateUrl: './dashboard-role-main.component.html',
  styleUrls: ['./dashboard-role-main.component.scss']
})
export class DashboardRoleMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  storeSub: Subscription = new Subscription();
  serviceRoleSub: Subscription = new Subscription();
  serviceDeleteRoleSub: Subscription = new Subscription();

  thead: Array<string> = ['STT', "Tên"];
  tbody: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<{pagination: any}>,
    private http: CommonHttpService
  ) { }

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let {status, amount} = data.amount;
      if(status) {
        this.store.dispatch(loadInitRolePagination({amount}));
      }
    })

    this.storeSub = this.store.select("pagination").subscribe(async (pagination: any) => {
      let { role } = pagination;

      if(role.totalAmount) {
        let url: string = `${environment.api.url}${environment.api.role.root}`;
        let start = (role.currentPage * role.totalItemInPage);
        url = `${url}/${start}/${role.totalItemInPage}`;

        this.serviceRoleSub = this.http.get(url).subscribe((res: any) => {
          let { status, message, roles } = res;

          if(status) {
            this.tbody = roles;
          }
        })
      }

    })
  }

  onDeleteRole(event: any) {
    console.log(event);
    let url: string = `${environment.api.url}${environment.api.role.delete}`;
    this.serviceDeleteRoleSub = this.http.post(url, {role: event}).subscribe((res: any) => {
      let {status, message} = res;
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateRole(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    this.serviceRoleSub.unsubscribe();
    this.serviceDeleteRoleSub.unsubscribe();
    this.store.dispatch(updateStatusPage({kind: "role"}));
  }
}
