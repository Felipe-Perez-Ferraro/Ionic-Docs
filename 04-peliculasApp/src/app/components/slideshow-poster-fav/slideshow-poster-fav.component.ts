import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDetails } from 'src/app/interfaces/movie-details.interface';
import { SwiperContainer } from 'swiper/element';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'components-slideshow-poster-fav',
  templateUrl: './slideshow-poster-fav.component.html',
})
export class SlideshowPosterFavComponent implements OnInit {
  @Input() movies: MovieDetails[] = [];

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
    const swiperElementConstructor = document.querySelectorAll(
      '.swiper-container-poster-fav'
    );

    swiperElementConstructor.forEach((se) => {
      const swiperOptions: SwiperOptions = {
        slidesPerView: 3.1,
        freeMode: {
          enabled: true,
        },
      };

      Object.assign(se!, swiperOptions);
      this.swiperElement = se as SwiperContainer;
      this.swiperElement.initialize();
    });
  }
}
