import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
// import { signout } from "../../store/store-user/store-user-action";
// import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit, OnDestroy {
  user: any = {};
  userSub: Subscription = new Subscription();
  statusTabLeft: boolean = false;

  constructor(
    private store: Store<{user: any}>,
    // private serviceHttp: CommonHttpService
  ) { }

  ngOnInit(): void {
    this.userSub = this.store.select("user").subscribe((user: any) => {
      this.user = user;
    })
  }

  onToggleTabLeftHandler() {
    this.statusTabLeft = !this.statusTabLeft;
  }

  onCloseTabLefthandler(event: any) {
    this.statusTabLeft = false;
  }

  onSignoutHandler() {
    // let url: string = `${environment.api.url}${environment.api.access.signout}`;
    // let payload = { id: this.user.id, email: this.user.email, accessToken: this.user.accessToken }

    // this.serviceHttp.post(url, payload).subscribe(
    //   (res: any) => {
    //     let { status, message } = res;
    //     if(status) {
    //       this.store.dispatch(signout());
    //       location.reload();
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

  onSignout() {
    this.statusTabLeft = false;
    this.onSignoutHandler();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
