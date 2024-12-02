import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { MoviesSlideTitleComponent } from './movies-slide-title/movies-slide-title.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SlideshowPosterFavComponent } from './slideshow-poster-fav/slideshow-poster-fav.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    SlideshowPosterFavComponent,
    MoviesSlideTitleComponent,
    MovieDetailsComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    SlideshowPosterFavComponent,
    MoviesSlideTitleComponent,
    MovieDetailsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
