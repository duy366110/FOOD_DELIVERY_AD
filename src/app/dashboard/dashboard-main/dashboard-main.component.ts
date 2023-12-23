import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  amountRole: number = 0;
  amountUser: number = 0;
  amountCategory: number = 0;
  amountDish: number = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { role, user, category, dish } = data;
      let { amount: amountRole } = role;
      let { amount: amountUser } = user;
      let { amount: amountCategory } = category;
      let { amount: amountDish } = dish;

      this.amountRole = amountRole;
      this.amountUser = amountUser;
      this.amountCategory = amountCategory;
      this.amountDish = amountDish;
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
