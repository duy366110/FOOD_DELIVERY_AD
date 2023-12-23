import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, throwError } from 'rxjs';
import { toggleLoader } from 'src/app/store/loader-action';
import { open, close } from "src/app/store/store-message/store-message-action";

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(
    private http: HttpClient,
    private store: Store<{loader: any, message: any}>
  ) { }

  setMessage(message: string) {
    this.store.dispatch(open({message}));

    setTimeout(() => {
      this.store.dispatch(close());
    }, 2500)
  }

  get(url: string = ""): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http
          .get(url)
          .pipe(
            map((response: any) => {
              this.store.dispatch(toggleLoader());

              let { status, message }: any = response;
              if(!status) {
                this.setMessage(message);
              }

              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(toggleLoader());
              this.setMessage(errorRes.message);
              return throwError(() => errorRes);
            })
          )
  }

  post(url: string = "", payload: any = {}): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http
          .post(url, payload)
          .pipe(
            map((response: any) => {
              this.store.dispatch(toggleLoader());

              let { status, message }: any = response;
              if(!status) {
                this.setMessage(message);
              }

              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(toggleLoader());
              this.setMessage(errorRes.message);
              return throwError(() => errorRes);
            })
          )
  }

  path(url: string = "", payload: any = {}): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http
          .patch(url, payload)
          .pipe(
            map((response: any) => {
              this.store.dispatch(toggleLoader());

              let { status, message }: any = response;
              if(!status) {
                this.setMessage(message);
              }

              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(toggleLoader());
              this.setMessage(errorRes.message);
              return throwError(() => errorRes);
            })
          )
  }

  delete(url: string = ""): Observable<any> {
    this.store.dispatch(toggleLoader());

    return this.http
          .delete(url)
          .pipe(
            map((response: any) => {
              this.store.dispatch(toggleLoader());

              let { status, message }: any = response;
              if(!status) {
                this.setMessage(message);
              }

              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(toggleLoader());
              this.setMessage(errorRes.message);
              return throwError(() => errorRes);
            })
          )
  }
}
