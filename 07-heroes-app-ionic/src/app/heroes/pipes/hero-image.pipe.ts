import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero-response.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.hero_alt) {
      return 'assets/no-image.png';
    }

    if (hero.hero_alt) return hero.hero_alt;
    return `assets/heroes/${hero.id}.jpg`;
  }
}
