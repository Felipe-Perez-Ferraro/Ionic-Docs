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
      icon: 'logo-apple-appstore',
      name: 'Alert',
      route: '/alert',
    },
  ];
}

interface ListItem {
  icon: string;
  name: string;
  route: string;
}
