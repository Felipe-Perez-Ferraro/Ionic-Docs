import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetails } from '../interfaces/movie-details.interface';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {
  genres: Genre[] = [];
  favoritePerGenre: FavoritePerGenre[] = [];

  constructor(
    private dataLocal: DataLocalService,
    private moviesService: MoviesService
  ) {}

  get movies(): MovieDetails[] {
    return this.dataLocal.localMovies;
  }

  async ionViewWillEnter() {
    console.log('hola');
    this.genres = await this.moviesService.getGenres();
    await this.dataLocal.loadFavs();
    this.moviesGenre(this.genres, this.movies);
  }

  moviesGenre(genres: Genre[], movies: MovieDetails[]) {
    this.favoritePerGenre = [];
    genres.forEach((g) => {
      this.favoritePerGenre.push({
        genre: g.name,
        moviesArr: movies.filter((m) => {
          return m.genres.find((genre) => genre.id === g.id);
        }),
      });
    });
  }
}

interface FavoritePerGenre {
  genre: string;
  moviesArr: MovieDetails[];
}
