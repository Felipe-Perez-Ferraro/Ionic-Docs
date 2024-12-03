import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({ providedIn: 'root' })
export class PushService {
  constructor(private oneSignal: OneSignal) {}

  config(): void {
    this.oneSignal.startInit(
      'af5eef60-0e11-4f2d-b6e4-97db3f48a10b',
      '226716755674'
    );
    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.InAppAlert
    );
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log('Notificacion abierta', noti);
    });

    this.oneSignal.endInit();
  }
}
