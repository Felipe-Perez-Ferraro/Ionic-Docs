import { Component } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(6);

    // Replace YOUR_ONESIGNAL_APP_ID with your OneSignal App ID
    OneSignal.initialize('af5eef60-0e11-4f2d-b6e4-97db3f48a10b');

    OneSignal.Notifications.addEventListener('click', async (e) => {
      let clickData = await e.notification;
      console.log('Notification Clicked : ' + clickData);
    });

    OneSignal.Notifications.requestPermission(true).then((success: Boolean) => {
      console.log('Notification permission granted ' + success);
    });
  }
}
