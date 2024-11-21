import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response.interface';

@Component({
  selector: 'components-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() index!: number;

  constructor() {}
}