import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero-response.interface';

@Component({
  selector: 'heroes-components-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {
  @Input() hero!: Hero;
}
