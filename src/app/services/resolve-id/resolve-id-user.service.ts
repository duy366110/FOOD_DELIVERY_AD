import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResolveIdUserService implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot | any, state: RouterStateSnapshot): Observable<any> | any {
    let url: string = `${environment.api.url}${environment.api.user.root}/${route.params.id}`;
    return this.http.get(url);
  }

}
