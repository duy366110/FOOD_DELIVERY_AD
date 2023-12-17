import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { loadInitRolePagination } from 'src/app/store/store-pagination/store-pagination-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role-main',
  templateUrl: './dashboard-role-main.component.html',
  styleUrls: ['./dashboard-role-main.component.scss']
})
export class DashboardRoleMainComponent implements OnInit, OnDestroy {

  url: string = `${environment.api.url}${environment.api.role.root}`;
  dataSub: Subscription = new Subscription();
  storeSub: Subscription = new Subscription();
  serviceRoleSub: Subscription = new Subscription();

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
        let start = (role.currentPage * role.totalItemInPage);
        this.url = `${this.url}/${start}/${role.totalItemInPage}`;

        this.serviceRoleSub = this.http.get(this.url).subscribe((res: any) => {
          // let { status, message, roles } = res;
          console.log(res);
  
          // if(status) {
          //   this.tbody = roles;
          // }
        })
      }

    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    this.serviceRoleSub.unsubscribe();
  }
}
