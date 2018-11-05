import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Tvmaze, Tvmazeshow } from '../services/tvmaze';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TvmazeService {

  private tvmazeUrl = 'http://api.tvmaze.com';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /* GET shows name contains search term */
  searchTvmazeshows(term: string): Observable<Tvmaze[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Tvmaze[]>(`${this.tvmazeUrl}/search/shows?q=${term}`).pipe(
      catchError(this.handleError<Tvmaze[]>('searchTvmazeshows', []))
    );
  }

  /** GET shows detail  */
  getTvmazeshows (id: number) {
    if (!id) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get(`${this.tvmazeUrl}/shows/${id}`).pipe(
        catchError(this.handleError('getTvmazeshow', []))
      );
  }

  /** GET shows seasons  */
  getShowseasons (id: number) {
    if (!id) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get(`${this.tvmazeUrl}/shows/${id}/seasons`).pipe(
        catchError(this.handleError('getShowseasons', []))
      );
  }

  /** GET shows episodes  */
  getShowepisodes (id: number) {
    if (!id) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get(`${this.tvmazeUrl}/shows/${id}/episodes`).pipe(
        catchError(this.handleError('getShowepisodes', []))
      );
  }
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}