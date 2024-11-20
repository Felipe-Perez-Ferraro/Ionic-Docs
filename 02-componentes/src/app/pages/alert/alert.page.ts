import { Component, inject, OnInit } from '@angular/core';
import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
})
export class AlertPage {
  private alertCtrl = inject(AlertController);

  public alertInputs: AlertInput[] = [
    {
      name: 'name',
      placeholder: 'Name',
    },
    {
      name: 'nickname',
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      name: 'age',
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      name: 'description',
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  public alertInputsBtn: AlertButton[] = [
    {
      text: 'Ok',
      handler: (data) => {
        console.log(data);
      },
    },
  ];

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Mi Alerta',
      subHeader: 'Sub Header de mi alerta',
      message: 'Mensaje Personalizado de mi alerta.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async presentMultiAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Mi Alerta Multi',
      subHeader: 'Sub Header de mi alerta',
      message: 'Mensaje Personalizado de mi alerta.',
      buttons: [
        {
          text: 'Ok',
          handler: () => console.log('Ok!'),
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
        },
      ],
    });

    await alert.present();
  }
}
