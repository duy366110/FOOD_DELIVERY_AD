import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-dish',
  templateUrl: './dashboard-dish.component.html',
  styleUrls: ['./dashboard-dish.component.scss']
})
export class DashboardDishComponent implements OnInit, OnDestroy {
  hideBtnEdit: boolean = true;
  routerEventSub: Subscription = new Subscription();

  constructor(
    private router: Router    
  ) {}

  ngOnInit(): void {
    this.routerEventSub = this.router.events.subscribe((event: any) => {
      if(/edit|new/g.test(event.routerEvent?.url)) {
        this.hideBtnEdit = false;

      } else {
        this.hideBtnEdit = true;
      }
    })
  }

  onNewUserHandler() : void {
    this.router.navigate(['/dish/new']);
  }

  ngOnDestroy(): void {
    this.routerEventSub.unsubscribe();
  }
}
