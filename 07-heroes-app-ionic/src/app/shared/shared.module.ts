import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Page } from './pages/error404-page/error404.page';
import { IonHeader, IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [Error404Page],
  imports: [CommonModule, IonicModule],
})
export class SharedModule {}
