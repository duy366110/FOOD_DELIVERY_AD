import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-role',
  templateUrl: './dashboard-role.component.html',
  styleUrls: ['./dashboard-role.component.scss']
})
export class DashboardRoleComponent implements OnInit, OnDestroy {

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

  onNewRoleHandler() : void {
    this.router.navigate(['/role/new']);
  }

  ngOnDestroy(): void {
    this.routerEventSub.unsubscribe();
  }

}
