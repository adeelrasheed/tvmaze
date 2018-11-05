import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Tvmaze, Tvmazeshow } from '../services/tvmaze';
import { TvmazeService } from '../services/tvmaze.service';

@Component({
  selector: 'shows-search',
  templateUrl: './tvmaze-search.component.html',
  styleUrls: [ './tvmaze-search.component.css' ]
})
export class TvmazeSearchComponent implements OnInit {
  tvmazeshows$: Observable<Tvmaze[]>;
  private searchTerms = new Subject<string>();

  constructor(private tvmazeService: TvmazeService, tvmaze: Tvmaze) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tvmazeshows$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tvmazeService.searchTvmazeshows(term)),
    );
  }
}