import { Component, inject, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
})
export class ActionSheetPage {
  private actionSheetCtrl = inject(ActionSheetController);

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action Sheet Options',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          cssClass: 'red',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('Borrado');
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('Compartido');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('Cancelar');
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
