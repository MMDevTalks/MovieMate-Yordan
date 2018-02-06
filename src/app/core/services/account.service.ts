import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) {

   }

   public getAccount(): Observable<any> {
    return this._http.get(`account`);
   }

}
