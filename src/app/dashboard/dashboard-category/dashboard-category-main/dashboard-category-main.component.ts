import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonHttpService } from 'src/app/services/service-http/common-http.service';
import { loadInitCategoryPagination, updateStatusPage } from 'src/app/store/store-pagination/store-pagination-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-main',
  templateUrl: './dashboard-category-main.component.html',
  styleUrls: ['./dashboard-category-main.component.scss']
})
export class DashboardCategoryMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  storeSub: Subscription = new Subscription();
  serviceUserSub: Subscription = new Subscription();
  serviceDeleteUserSub: Subscription = new Subscription();

  thead: Array<string> = ['STT', "Name", "Thumbnail"];
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
        this.store.dispatch(loadInitCategoryPagination({amount}));
      }
    })

    this.storeSub = this.store.select("pagination").subscribe(async (pagination: any) => {
      let { category } = pagination;

      if(category.totalAmount) {
        let url: string = `${environment.api.url}${environment.api.category.root}`;
        let start = (category.currentPage * category.totalItemInPage);
        url = `${url}/${start}/${category.totalItemInPage}`;

        this.serviceUserSub = this.http.get(url).subscribe((res: any) => {
          let { status, message, categories } = res;
          if(status) {
            this.tbody = categories;
          }
        })
      }

    })
  }

  onDeleteCategory(event: any) {
    console.log(event);
    let url: string = `${environment.api.url}${environment.api.category.delete}`;
    this.serviceDeleteUserSub = this.http.post(url, {category: event}).subscribe((res: any) => {
      let {status, message} = res;
      
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateCategory(event: any) {
    // this.router.navigate(['/user/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.storeSub.unsubscribe();
    // this.serviceDeleteUserSub.unsubscribe();
    // this.store.dispatch(updateStatusPage({kind: "user"}));
  }
  
}
