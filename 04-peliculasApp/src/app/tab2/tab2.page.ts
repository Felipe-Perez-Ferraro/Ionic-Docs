import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies-response.interface';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page implements OnInit {
  searchText: string = '';
  movies: Movie[] = [];
  featuredMovies: Movie[] = [];
  loading: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.moviesService.getFeatures().subscribe((res) => {
      this.featuredMovies = res;
    });
  }

  onSearchChange(event: any) {
    this.loading = true;
    const value = event.detail.value;

    this.moviesService.getSearchMovie(value.trim()).subscribe((res) => {
      this.movies = res;
      this.loading = false;
    });
  }

  selectIdea(idea: string) {
    this.searchText = idea;
    const fakeEvent = { detail: { value: idea } };
    this.onSearchChange(fakeEvent);
  }

  async viewMovieDetails(movieId: number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsComponent,
      componentProps: {
        movieId,
      },
    });

    modal.present();
  }
}
