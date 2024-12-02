import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'components-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
})
export class SlideshowBackdropComponent implements OnInit {
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
      '.swiper-container-backdrop'
    );
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1.2,
      freeMode: {
        enabled: true,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.initialize();
  }
}
