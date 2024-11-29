import { Component, Input } from '@angular/core';

@Component({
  selector: 'components-movies-slide-title',
  templateUrl: './movies-slide-title.component.html',
})
export class MoviesSlideTitleComponent {
  @Input() slideTitle!: string;
}
