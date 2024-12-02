import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'components-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrl: './slideshow-pairs.component.scss',
})
export class SlideshowPairsComponent {
  @Input() popularMovies: Movie[] = [];

  @Output() loadMoreMovies: EventEmitter<void> = new EventEmitter();

  swiperElement: SwiperContainer | null = null;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.displayCarousel();
  }

  onLoadMore() {
    this.loadMoreMovies!.emit();
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
      '.swiper-container-pairs'
    );
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3.1,
      freeMode: {
        enabled: true,
      },
      spaceBetween: -10,
    };

    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement = swiperElementConstructor as SwiperContainer;
    this.swiperElement.initialize();
  }
}
