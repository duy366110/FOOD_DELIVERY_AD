import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/loader-action';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpCustomService {

  constructor(
    private store: Store<{loader: any}>
  ) { }

  async post(url: string, payload: any, cb: any) {
    try {
      this.store.dispatch(toggleLoader());
      let res = await fetch(url, {
        method: "POST",
        body: payload
      })

      if(!res.ok) throw new Error('Call api server unsccuess');
      this.store.dispatch(toggleLoader());
      cb(await res.json());

    } catch (error) {
      this.store.dispatch(toggleLoader());
      throw error;
    }
  }
  
}
