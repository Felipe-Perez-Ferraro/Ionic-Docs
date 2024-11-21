import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces/news-response.interface';
import { map, Observable } from 'rxjs';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlineNews(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&category=business`,
        {
          params: {
            apiKey,
          },
        }
      )
      .pipe(map(({ articles }) => articles));
  }
}
