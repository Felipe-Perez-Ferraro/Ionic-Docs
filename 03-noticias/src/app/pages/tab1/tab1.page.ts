import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
})
export class Tab1Page implements OnInit {
  public articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  getTopNews() {
    return this.newsService
      .getTopHeadlineNews()
      .subscribe((articles) => this.articles.push(...articles));
  }

  ngOnInit(): void {
    this.getTopNews();
  }
}
