import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-message',
  templateUrl: './common-message.component.html',
  styleUrls: ['./common-message.component.scss']
})
export class CommonMessageComponent implements OnInit, OnDestroy {

  storeSub: Subscription = new Subscription();
  message: any = { status: false, content: ""};

  constructor(
    private store: Store<{message: any}>
  ) { }

  ngOnInit() : void {
    this.storeSub = this.store.select("message").subscribe((store: any) => {
      this.message = store;
    })
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

}
