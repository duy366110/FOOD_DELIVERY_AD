import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, throwError } from 'rxjs';
import { openLoader, closeLoader} from "../store/store-loader/store-loader-action";
import { openMessage, closeMessage } from "../store/store-message/store-message-action";

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(
    private http: HttpClient,
    private store: Store<{loader: any}>
  ) { }

  get(url: string = ""): Observable<any> {
    this.store.dispatch(openLoader());

    return this.http
          .get(url)
          .pipe(
            map((response: any) => {
              this.store.dispatch(closeLoader());
              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(closeLoader());
              this.store.dispatch(openMessage({message: errorRes.message}));

              setTimeout(() => {
                this.store.dispatch(closeMessage());
              }, 2500)

              return throwError(() => errorRes);
            })
          )
  }

  post(url: string = "", payload: any = {}): Observable<any> {
    this.store.dispatch(openLoader());

    return this.http
          .post(url, payload)
          .pipe(
            map((response: any) => {
              this.store.dispatch(closeLoader());
              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(closeLoader());
              this.store.dispatch(openMessage({message: errorRes.message}));

              setTimeout(() => {
                this.store.dispatch(closeMessage());
              }, 2500)

              return throwError(() => errorRes);
            })
          )
  }

  path(url: string = "", payload: any = {}): Observable<any> {
    this.store.dispatch(openLoader());

    return this.http
          .patch(url, payload)
          .pipe(
            map((response: any) => {
              this.store.dispatch(closeLoader());
              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(closeLoader());
              this.store.dispatch(openMessage({message: errorRes.message}));

              setTimeout(() => {
                this.store.dispatch(closeMessage());
              }, 2500)

              return throwError(() => errorRes);
            })
          )
  }

  delete(url: string = ""): Observable<any> {
    this.store.dispatch(openLoader());

    return this.http
          .delete(url)
          .pipe(
            map((response: any) => {
              this.store.dispatch(closeLoader());
              return response;
            }),
            catchError((errorRes: any) => {
              this.store.dispatch(closeLoader());
              this.store.dispatch(openMessage({message: errorRes.message}));

              setTimeout(() => {
                this.store.dispatch(closeMessage());
              }, 2500)

              return throwError(() => errorRes);
            })
          )
  }
}
