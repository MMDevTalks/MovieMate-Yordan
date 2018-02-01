import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

const API_KEY = 'af528491241d0db2ccfc335ee3630af1';
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  getRequestToken() {
    let params = new HttpParams();
    params = params.set('api_key', API_KEY);
    return this._http.get(`https://api.themoviedb.org/3/authentication/token/new`, { params } )
    .do((response: any) => {
      const token = response.request_token;
      const redirectTo = `http://${location.host}/login`;
      location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${redirectTo}`;
    });
  }

  getSession(request_token: string) {
    let params = new HttpParams();
    params = params.set('api_key', API_KEY);
    params = params.set('request_token', request_token);
    return this._http.get(`https://api.themoviedb.org/3/authentication/session/new`, { params } )
    ._do((response: any) => {
      localStorage.setItem('session_id', response.session_id);
    });
  }

}
