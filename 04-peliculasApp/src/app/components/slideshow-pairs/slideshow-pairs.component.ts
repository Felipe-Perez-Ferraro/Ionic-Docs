import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { SwiperContainer } from 'swiper/element';
import { SwiperModule, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'components-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrl: './slideshow-pairs.component.scss',
})
export class SlideshowPairsComponent {
  @Input() popularMovies: Movie[] = [];

  @Output() loadMoreMovies: EventEmitter<void> = new EventEmitter();

  swiperElement: SwiperContainer | null = null;

  ngOnInit() {
    this.displayCarousel();
  }

  onLoadMore() {
    this.loadMoreMovies!.emit();
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
