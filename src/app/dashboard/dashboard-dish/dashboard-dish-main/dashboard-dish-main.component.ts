import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { loadInitDishPagination, updateCurrentDishPage } from 'src/app/store/store-pagination/store-pagination-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-dish-main',
  templateUrl: './dashboard-dish-main.component.html',
  styleUrls: ['./dashboard-dish-main.component.scss']
})
export class DashboardDishMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  storeSub: Subscription = new Subscription();
  serviceDishSub: Subscription = new Subscription();
  serviceDeleteDishSub: Subscription = new Subscription();

  thead: Array<string> = ['STT', "Title", "Thumbnail"];
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
        this.store.dispatch(loadInitDishPagination({amount}));
      }
    })

    this.storeSub = this.store.select("pagination").subscribe(async (pagination: any) => {
      let { dish } = pagination;

      if(dish.totalAmount) {
        let url: string = `${environment.api.url}${environment.api.dish.root}`;
        let start = (dish.currentPage * dish.totalItemInPage);
        url = `${url}/${start}/${dish.totalItemInPage}`;

        this.serviceDishSub = this.http.get(url).subscribe((res: any) => {
          let { status, message, dishs } = res;
          if(status) {
            this.tbody = dishs;
          }
        })
      }

    })
  }

  onDeleteRole(event: any) {
    console.log(event);
    let url: string = `${environment.api.url}${environment.api.dish.delete}`;
    this.serviceDeleteDishSub = this.http.post(url, {dish: event}).subscribe((res: any) => {
      let {status, message} = res;
      
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateRole(event: any) {
    this.router.navigate(['/dish/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    this.serviceDishSub.unsubscribe();
    this.serviceDeleteDishSub.unsubscribe();
    this.store.dispatch(updateCurrentDishPage({kind: "dish"}));
  }
}
