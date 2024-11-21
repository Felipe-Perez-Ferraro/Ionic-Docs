import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
})
export class GridPage implements OnInit {
  items = Array(12);
  constructor() {}

  ngOnInit() {}
}
