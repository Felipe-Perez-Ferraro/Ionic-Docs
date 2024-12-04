import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonThumbnail,
  IonList,
  IonItem,
  IonImg,
  IonLabel,
  IonText,
  IonButton,
  IonIcon,
  IonModal,
} from '@ionic/angular/standalone';
import { products } from 'src/app/data/products';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonImg,
    IonItem,
    IonList,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
  ],
})
export class ProductsPage implements OnInit {
  items: any[] = [];
  itemModel: any = {};
  showBarcode: boolean = false;
  currency: string = '₹';

  constructor() {}

  ngOnInit() {
    this.items = [...products];
  }

  getBarcodeData(item: any) {
    this.itemModel = { ...item };
    this.showBarcode = true;

    setTimeout(() => {
      this.getBarcode(item.barcode);
    }, 500);
  }

  getBarcode(barcode: string) {
    JsBarcode('#barcode', barcode, {
      lineColor: '#0aa',
      width: 4,
      height: 200,
      displayValue: false,
    });
  }
}
