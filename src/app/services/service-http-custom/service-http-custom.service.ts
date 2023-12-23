import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleLoader } from 'src/app/store/loader-action';
import { open, close } from "src/app/store/store-message/store-message-action";

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpCustomService {

  constructor(
    private store: Store<{loader: any, message: any}>
  ) { }

  setMessage(message: string) {
    this.store.dispatch(open({message}));

    setTimeout(() => {
      this.store.dispatch(close());
    }, 2500)
  }

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

    } catch (error: any) {
      this.store.dispatch(toggleLoader());
      this.setMessage(error.message);
      throw error;
    }
  }
  
}
