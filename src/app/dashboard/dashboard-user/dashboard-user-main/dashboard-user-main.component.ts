import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  thead: Array<string> = ['STT', "Họ và tên", "E-mail"];
  tbody: Array<any> = [];

  constructor(
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

          console.log(users);

          if(status) {
            console.log(users);
            this.tbody = users;
          }
        })
      }

    })
  }

  onDeleteRole(event: any) {
    // console.log(event);
    // let url: string = `${environment.api.url}${environment.api.role.delete}`;
    // this.serviceDeleteRoleSub = this.http.post(url, {role: event}).subscribe((res: any) => {
    //   let {status, message} = res;
    //   if(status) {
    //     window.location.reload();
    //   }
    // })
  }

  onUpdateRole(event: any) {
    // this.router.navigate(['/role/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    this.store.dispatch(updateStatusPage({kind: "user"}));
  }
}
