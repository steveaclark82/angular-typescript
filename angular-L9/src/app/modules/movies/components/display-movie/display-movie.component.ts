import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    this.movieDeleted.emit(this.movie.id);
  }
}