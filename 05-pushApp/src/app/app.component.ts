import { Component } from '@angular/core';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private pushService: PushService) {
    this.pushService.config();
  }
}
