import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public listItems: ListItem[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      route: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      route: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      route: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      route: '/buttons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      route: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      route: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      route: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      route: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      route: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      route: '/infinite-scroll',
    },
    {
      icon: 'hammer-outline',
      name: 'Inputs',
      route: '/input',
    },
  ];
}

interface ListItem {
  icon: string;
  name: string;
  route: string;
}
