import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie, MoviesResponse } from '../interfaces/movies-response.interface';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private popularMoviesPage: number = 0;

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Movie[]> {
    const today = new Date();
    const lastDayOfTheMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const month = today.getMonth() + 1;
    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDayOfTheMonth}`;

    const url = `/movie/now_playing?primary_release_date.gte=${start}&primary_release_date.lte=${end}`;

    return this.executeQuery<MoviesResponse>(url).pipe(
      map(({ results }) => results)
    );
  }

  getPopularMovies(): Observable<Movie[]> {
    this.popularMoviesPage++;

    return this.executeQuery<MoviesResponse>(
      `/movie/popular?page=${this.popularMoviesPage}`
    ).pipe(map(({ results }) => results));
  }

  private executeQuery<T>(query: string): Observable<MoviesResponse> {
    const url = `${URL}${query}&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<MoviesResponse>(url);
  }
}
