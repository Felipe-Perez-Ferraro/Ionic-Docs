import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
})
export class CheckPage {
  public checks = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'danger',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
  ];
}
