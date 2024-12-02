import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { ModalController } from '@ionic/angular';
register();

@Component({
  selector: 'components-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
})
export class SlideshowPosterComponent implements OnInit {
  @Input() recentMovies: Movie[] = [];

  swiperElement: SwiperContainer | null = null;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.displayCarousel();
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

  private displayCarousel() {
    const swiperElementConstructor = document.querySelector(
      '.swiper-container-poster'
    );
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3.1,
      freeMode: {
        enabled: true,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.initialize();
  }
}
