import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { signout } from 'src/app/store/store-user/store-user-action';
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
    private router: Router,
    private store: Store<{user: any}>,
    private serviceHttp: CommonHttpService
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
    let url: string = environment.api.url;
    url = url.replace(/admin\//g, environment.api.access.signout);

    let payload = {
      id: this.user.id,
      accessToken: this.user.accessToken,
      refreshToken: this.user.refreshToken
    };

    this.serviceHttp.post(url, payload).subscribe((res: any) => {
        let { status, message } = res;

        console.log(res);

        if(status) {
          this.store.dispatch(signout());
          this.router.navigate(['/auth']);
        }
      })
  }

  onSignout() {
    this.statusTabLeft = false;
    this.onSignoutHandler();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
