import { Component } from '@angular/core';

@Component({
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {
  sideBarItems = [
    { label: 'Listado', icon: 'bookmark-outline', url: './list' },
    { label: 'Añadir', icon: 'add-outline', url: './new-hero' },
    { label: 'Buscar', icon: 'search-outline', url: './search' },
  ];
}
