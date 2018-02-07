import { Injectable } from '@angular/core';
import { MOVIES } from '../../mocks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) { }

  getNowPlayingMovies(): Observable<any> {
    return this._http.get(`movie/now_playing`)
      .map( (response: any) =>
        response.results
        );
    }

  getMovieById(id: string): Observable<any> {
    return this._http.get(`movie/${id}`);
    }
}
