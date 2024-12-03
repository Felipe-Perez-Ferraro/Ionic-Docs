import { Component, OnInit } from '@angular/core';
import { PushService } from '../services/push.service';
import { Notification } from 'src/interfaces/os-res.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  messages: Notification[] = [];

  constructor(private pushService: PushService) {}

  ngOnInit(): void {
    this.displayMessages();
  }

  displayMessages() {
    this.pushService.getMessages().subscribe((res) => {
      this.messages = res;
    });
  }
}
