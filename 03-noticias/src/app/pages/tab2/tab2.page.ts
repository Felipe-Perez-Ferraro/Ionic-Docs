import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, SegmentChangeEventDetail } from '@ionic/angular';
import { Article } from 'src/app/interfaces/news-response.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  public categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  public selectedOpt: string = this.categories[0];
  public articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  segmentChanged(category: any) {
    this.selectedOpt = category.target.value;
    this.newsService
      .getTopHeadlineByCategories(this.selectedOpt)
      .subscribe((articles) => (this.articles = [...articles]));
  }

  loadData() {
    this.newsService
      .getTopHeadlineByCategories(this.selectedOpt, true)
      .subscribe((articles) => {
        if (articles.length === this.articles.length) {
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articles = articles;
        this.infiniteScroll.complete();
      });
  }

  ngOnInit(): void {
    this.newsService
      .getTopHeadlineByCategories(this.selectedOpt)
      .subscribe((articles) => (this.articles = [...articles]));
  }
}
