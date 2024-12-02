import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MovieDetails } from '../interfaces/movie-details.interface';

@Injectable({ providedIn: 'root' })
export class DataLocalService {
  private _storage: Storage | null = null;
  private _localMovies: MovieDetails[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  get localMovies(): MovieDetails[] {
    return [...this._localMovies];
  }

  async init(): Promise<void> {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavs();
  }

  async saveRemoveMovie(movie: MovieDetails): Promise<void> {
    const exists = this._localMovies.find((m) => m.title === movie.title);

    if (exists) {
      this._localMovies = this._localMovies.filter(
        (m) => m.title !== movie.title
      );
    } else {
      this._localMovies = [movie, ...this._localMovies];
    }
    this._storage?.set('peliculas', this._localMovies);
  }

  async loadFavs() {
    const movies = await this._storage?.get('peliculas');
    this._localMovies = movies || [];
  }

  movieInFavorites(movie: MovieDetails): boolean {
    return !!this._localMovies.find((m) => m.title === movie.title);
  }
}
