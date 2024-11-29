import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'components-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() recentMovies: Movie[] = [];

  swiperElement: SwiperContainer | null = null;

  constructor() {}

  ngOnInit() {
    this.displayCarousel();
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
