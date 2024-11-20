import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'components-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public title = input<string>('');
}
