import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor (private _movieService: MovieService, private _router: Router) {
  }

  shownMovieDetails(movie) {
    this._router.navigate([{outlets: {'sidebar': `details/${movie.id}`}}]);
  }
  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.movies$ = this._movieService.getNowPlayingMovies();
  }

}
