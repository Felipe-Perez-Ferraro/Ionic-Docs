import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin';
import { map, Observable } from 'rxjs';
import { Notification, OSResponse } from 'src/interfaces/os-res.interface';

const OS_APP_ID = 'af5eef60-0e11-4f2d-b6e4-97db3f48a10b';
const OS_API_KEY =
  'os_v2_app_v5po6yaocfhs3nxes7nt6sfbbmgvwlgidkwuwnfyohmtbna3skqzr2jf6pidqe4ph3em5hvuyuc3zfippu6kzaejoo6fchv4gmt5trq';
const URL = 'https://api.onesignal.com';

@Injectable({ providedIn: 'root' })
export class PushService {
  constructor(private platform: Platform, private http: HttpClient) {}

  config(): void {
    if (this.platform.is('capacitor')) {
      OneSignal.initialize(OS_APP_ID);
      OneSignal.Notifications.addEventListener('click', async (e) => {
        let clickData = await e.notification;
        console.log('Notification Clicked : ' + clickData);
      });
      OneSignal.Notifications.requestPermission(true).then(
        (success: Boolean) => {
          console.log('Notification permission granted ' + success);
        }
      );
    }
  }

  getMessages(): Observable<Notification[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Basic ${OS_API_KEY}`);

    return this.http
      .get<OSResponse>(`${URL}/notifications?app_id=${OS_APP_ID}`, { headers })
      .pipe(map((res) => res.notifications));
  }
}
