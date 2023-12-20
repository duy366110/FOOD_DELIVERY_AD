import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { reload } from './store/store-user/store-user-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectUserSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<{user: any}>,
  ) {}

  ngOnInit(): void {
    let user: string | any = localStorage.getItem("user");

    if(user) {
      this.store.dispatch(reload(JSON.parse(user)));

    } else {
      this.selectUserSub = this.store.select("user").subscribe((user: any) => {
        let checkList = [];
  
        for(let key of Object.keys(user)) {
          checkList.push(user[key]? true : false);
        }
  
        if(checkList.every((status) => status === true)) {
          console.log("user co the o lai console");
  
        } else {
            this.router.navigate(['/auth']);
        }
      }) 
    }
  }

  ngOnDestroy(): void {
    this.selectUserSub.unsubscribe();
  }

}
