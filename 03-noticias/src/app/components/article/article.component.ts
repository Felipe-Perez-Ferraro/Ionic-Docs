import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response.interface';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {
  ActionSheetButton,
  ActionSheetController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { Share } from '@capacitor/share';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'components-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() index!: number;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheetCrtl: ActionSheetController,
    private storageService: StorageService,
    private toastController: ToastController
  ) {}

  openArticle() {
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

  async onOpenMenu(): Promise<void> {
    const isArtilceInFav = this.storageService.articleInFavorites(this.article);

    const buttons: ActionSheetButton[] = [
      {
        text: isArtilceInFav ? 'Remove Like' : 'Like',
        icon: isArtilceInFav ? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite(),
      },
      {
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareArticle(),
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      },
    ];

    const share: ActionSheetButton = {
      text: 'Compartir',
      icon: 'share-outline',
      handler: () => this.onShareArticle(),
    };

    // if (this.platform.is('capacitor')) buttons.unshift(share);

    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Opciones',
      buttons,
    });

    await actionSheet.present();
  }

  private onShareArticle(): void {
    if (this.platform.is('cordova')) {
      Share.share({
        text: this.article.title,
        dialogTitle: this.article.source.name,
        url: this.article.url,
      });
    } else {
      if (navigator.share) {
        navigator
          .share({
            title: this.article.title,
            text: this.article.description!,
            url: this.article.url,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('navegador no soporta');
      }
    }
  }

  private onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
    this.presentToast();
  }

  private async presentToast() {
    const isArtilceInFav = this.storageService.articleInFavorites(this.article);

    const toast = await this.toastController.create({
      message: isArtilceInFav
        ? 'Agregado de Favoritos'
        : 'Eliminado de Favoritos',
      duration: 1500,
      position: 'bottom',
      color: isArtilceInFav ? 'success' : 'danger',
    });

    await toast.present();
  }
}
