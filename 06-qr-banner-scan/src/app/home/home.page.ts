import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
  IonItem,
  IonText,
  IonListHeader,
  IonCol,
  IonRow,
  IonCard,
  IonThumbnail,
  IonToast,
  IonBadge,
} from '@ionic/angular/standalone';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonToast,
    IonCard,
    IonRow,
    IonCol,
    IonListHeader,
    IonText,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonContent,
    IonThumbnail,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  private cartService = inject(CartService);

  isToast: boolean = false;
  toastData: any = {};
  totalItems: number = 0;
  cartSub!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItems : 0;
      },
    });
  }

  scanBarcode() {
    try {
      const code = this.cartService.startScan();
      if (!code) {
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'Product not avaiable',
        };
        return;
      }

      // this.cartService.addItemByBarcode(code);
    } catch (error) {
      console.log(error);
    }
  }

  scanAndPay() {
    try {
      const code = this.cartService.startScan(0);
      if (!code) {
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'Error paying',
        };
        return;
      }

      this.isToast = true;
      this.toastData = {
        color: 'success',
        message: 'Payment successfull',
      };
      console.log(code);
    } catch (error) {
      console.log(error);
    }
  }
}
