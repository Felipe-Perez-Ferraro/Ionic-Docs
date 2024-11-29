import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies-response.interface';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
})
export class Tab1Page implements OnInit {
  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getFeatures().subscribe((resp) => {
      this.recentMovies = resp;
    });

    this.getPopularMovies();
  }

  loadMoreMovies(): void {
    this.getPopularMovies();
    const swiperContainer: SwiperContainer | null = document.querySelector(
      '.swiper-container-pairs'
    );

    const index: number = swiperContainer!.swiper.activeIndex;

    if (swiperContainer?.swiper) {
      swiperContainer.swiper.update();
      swiperContainer.swiper.slideTo(index - 1);
    }
  }

  private getPopularMovies(): void {
    this.moviesService.getPopularMovies().subscribe((resp) => {
      this.popularMovies = [...this.popularMovies, ...resp];
    });
  }
}
