import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectMovie(movie) {
    alert(movie.id + 'was selected!');
  }

}
