import { Article } from './news-response.interface';

export interface ArticlesByCategoryAndPage {
  [key: string]: {
    page: number;
    articles: Article[];
  };
}
