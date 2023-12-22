import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  updateCurrentCategoryPage,
  updateCurrentRolePage,
  updateCurrentUserPage
} from 'src/app/store/store-pagination/store-pagination-action';


@Component({
  selector: 'app-common-pagination',
  templateUrl: './common-pagination.component.html',
  styleUrls: ['./common-pagination.component.scss']
})
export class CommonPaginationComponent implements OnInit {
  
  statusRenderPagination: boolean = false;
  paginationList: Array<number> = [];
  pagination: any;
  section: string = "";
  kind: string = "key";

  constructor(private store: Store<{pagination: any}>) { }

  ngOnInit(): void {
    this.store.select("pagination").subscribe((pagination: any) => {

      for(let key of Object.keys(pagination)) {
        if(pagination[key].status) {
          this.kind = key;

          this.pagination = pagination[key];

          if(pagination[key].totalPage > 1) {
            this.statusRenderPagination = true;
            this.section = key;
            this.paginationList = Array.from({length: pagination[key].totalPage}, (elm, index) => index);
          }
          return;
        }
      }
    })
  }

  onChangeCurrentPage(page: number) {
    switch(this.kind) {
      case 'user':
        this.store.dispatch(updateCurrentUserPage({page, section: this.section}));
        break

      case 'category':
        this.store.dispatch(updateCurrentCategoryPage({page, section: this.section}));
        break

      case "role":
      default:
        this.store.dispatch(updateCurrentRolePage({page, section: this.section}));
        break
    }
  }

}
