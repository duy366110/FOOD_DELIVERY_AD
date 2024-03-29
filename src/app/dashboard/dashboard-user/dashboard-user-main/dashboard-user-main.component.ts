import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { loadInitUserPagination, updateStatusPage } from 'src/app/store/store-pagination/store-pagination-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-user-main',
  templateUrl: './dashboard-user-main.component.html',
  styleUrls: ['./dashboard-user-main.component.scss']
})
export class DashboardUserMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  storeSub: Subscription = new Subscription();
  serviceUserSub: Subscription = new Subscription();
  serviceDeleteUserSub: Subscription = new Subscription();

  thead: Array<string> = ['STT', "Họ và tên", "E-mail", "Quyền tài khoản"];
  tbody: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{pagination: any}>,
    private http: CommonHttpService
  ) { }

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { status, message, amount } = data.amount;
      if(status) {
        this.store.dispatch(loadInitUserPagination({amount}));
      }
    })

    this.storeSub = this.store.select("pagination").subscribe(async (pagination: any) => {
      let { user } = pagination;

      if(user.totalAmount) {
        let url: string = `${environment.api.url}${environment.api.user.root}`;
        let start = (user.currentPage * user.totalItemInPage);
        url = `${url}/${start}/${user.totalItemInPage}`;

        this.serviceUserSub = this.http.get(url).subscribe((res: any) => {
          let { status, message, users } = res;
          if(status) {
            this.tbody = users;
          }
        })
      }

    })
  }

  onDeleteRole(event: any) {
    let url: string = `${environment.api.url}${environment.api.user.delete}`;
    this.serviceDeleteUserSub = this.http.post(url, {user: event}).subscribe((res: any) => {
      let {status, message} = res;
      
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateRole(event: any) {
    this.router.navigate(['/user/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    this.serviceDeleteUserSub.unsubscribe();
    this.store.dispatch(updateStatusPage({kind: "user"}));
  }
}
