import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response.interface';

@Component({
  selector: 'components-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  @Input() articles!: Article[];

  constructor() {}
}
