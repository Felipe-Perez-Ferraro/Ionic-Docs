import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Cast } from 'src/app/interfaces/movie-cast.interface';
import { MovieDetails } from 'src/app/interfaces/movie-details.interface';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId!: number;

  movieDetails?: MovieDetails;
  movieCast: Cast[] = [];
  oculto: number = 150;
  swiperElement: SwiperContainer | null = null;
  isMovieInFavs?: boolean;

  constructor(
    private moviesService: MoviesService,
    private dataLocal: DataLocalService,
    private modalCtrl: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.moviesService.getMovieDetails(this.movieId).subscribe((res) => {
      this.movieDetails = res;
      this.isMovieInFavs = this.dataLocal.movieInFavorites(this.movieDetails);
    });

    this.moviesService.getMovieCast(this.movieId).subscribe(({ cast }) => {
      if (cast) {
        this.movieCast = cast;
        this.displayCastCarousel();
      }
    });
  }

  showOverview(): void {
    this.oculto = 5000;
  }

  goBack(): void {
    this.modalCtrl.dismiss();
  }

  addToFavorites(): void {
    if (this.movieDetails) {
      this.dataLocal.saveRemoveMovie(this.movieDetails);
      this.isMovieInFavs = !this.isMovieInFavs;
      this.presentToast();
    }
  }

  private displayCastCarousel() {
    const swiperElementConstructor = document.querySelector(
      '.swiper-cast-container'
    );

    const swiperOptions: SwiperOptions = {
      slidesPerView: 3,
      freeMode: {
        enabled: true,
      },
      spaceBetween: -5,
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.initialize();
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: this.isMovieInFavs
        ? 'Agregado de Favoritos'
        : 'Eliminado de Favoritos',
      duration: 1500,
      position: 'bottom',
      color: this.isMovieInFavs ? 'success' : 'danger',
    });

    await toast.present();
  }
}
