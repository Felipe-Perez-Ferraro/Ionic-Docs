import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/news-response.interface';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticles: Article[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  get localArticles(): Article[] {
    return [...this._localArticles];
  }

  async init(): Promise<void> {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavs();
  }

  async saveRemoveArticle(article: Article): Promise<void> {
    const exists = this._localArticles.find(
      (art) => art.title === article.title
    );

    if (exists) {
      this._localArticles = this._localArticles.filter(
        (art) => art.title !== article.title
      );
    } else {
      this._localArticles = [article, ...this._localArticles];
    }
    this._storage?.set('articles', this._localArticles);
  }

  async loadFavs(): Promise<void> {
    const articles = await this._storage?.get('articles');
    this._localArticles = articles || [];
  }

  articleInFavorites(article: Article): boolean {
    return !!this._localArticles.find((art) => art.title === article.title);
  }
}
