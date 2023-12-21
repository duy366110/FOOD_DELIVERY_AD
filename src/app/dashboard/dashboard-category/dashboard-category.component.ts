import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit, OnDestroy {

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
    this.router.navigate(['/category/new']);
  }

  ngOnDestroy(): void {
    this.routerEventSub.unsubscribe();
  }
}
