import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-header-tableft',
  templateUrl: './common-header-tableft.component.html',
  styleUrls: ['./common-header-tableft.component.scss']
})
export class CommonHeaderTableftComponent implements OnInit, OnDestroy {

  @Input('statusTabLeft') statusTabLeft: boolean = false;
  @Output("emitCloseTabLeft") emitCloseTabLeft: any = new EventEmitter<any>();
  @Output("emitSignout") emitSignout: any = new EventEmitter<any>();

  user: any = {id: null};
  storeUser: Subscription = new Subscription();

  constructor(
    private store: Store<{user: any}>
  ) { }

  ngOnInit(): void {
    this.storeUser = this.store.select("user").subscribe((user: any) => {
      this.user = user;
    })
  }

  onCloseTabLeftHandler() {
    this.emitCloseTabLeft.emit(false)
  }

  onSignOut(): void {
    this.emitSignout.emit();
  }

  ngOnDestroy() : void {
    this.storeUser.unsubscribe();
  }

}
