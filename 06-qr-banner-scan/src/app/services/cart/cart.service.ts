import { inject, Injectable } from '@angular/core';
// import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { products } from 'src/app/data/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private storageService = inject(StorageService);

  private cart$ = new BehaviorSubject<any>(null);
  model: any = null;
  cartStoredName: string = 'barcode_cart';
  products: any[] = [...products];

  constructor() {
    this.getCart();
  }

  get cart() {
    return this.cart$.asObservable();
  }

  async startScan(val?: number) {
    try {
      // const result = await CapacitorBarcodeScanner.scanBarcode({
      //   hint: val || 17,
      //   cameraDirection: 1,
      // });
      // console.log(result);
      // return result.ScanResult;
    } catch (error) {
      throw error;
    }
  }

  addItemByBarcode(barcode: string) {
    const item = this.products.find((item) => item.barcode === barcode);
    if (!item) {
      throw 'Item not found';
    }
  }

  addQuantity(item: any) {
    console.log(item);

    if (this.model) {
      const index = this.model.items.findIndex((data: any) => {
        data.item_id === item.id;
      });

      if (index >= 0) {
        this.model.items[index].quantity += 1;
      } else {
        const items = [
          {
            item_id: item?.id,
            name: item?.name,
            description: item?.description,
            price: +item?.price,
            cover: item?.cover,
            quantity: 1,
          },
        ];

        this.model.items = this.model.items.concat(items);
      }
    } else {
      const item_data = {
        item_id: item?.id,
        name: item?.name,
        description: item?.description,
        price: +item?.price,
        cover: item?.cover,
        quantity: 1,
      };

      this.model = {
        items: [item_data],
      };
    }
    return this.calculate();
  }

  subtractQuantity(item: any) {
    if (this.model) {
      const index = this.model.items.findIndex((data: any) => {
        data.item_id === item.id;
      });

      if (index >= 0) {
        if (this.model.items[index]?.quantity > 0) {
          this.model.items[index].quantity += 1;
        }

        return this.calculate();
      }
    }
    return null;
  }

  calculate() {
    const items = this.model.items.filter((item: any) => item.quantity > 0);

    if (items?.lenght === 0) {
      this.clearCart();
      return;
    }

    let totalItem = 0;
    let totalPrice = 0;

    for (const element of items) {
      totalItem += element.quantity;
      totalPrice += element.price * element.quantity;
    }

    const grandTotal = totalPrice;

    this.model = {
      ...this.model,
      items,
      totalItem,
      totalPrice,
      grandTotal,
    };

    this.cart$.next(this.model);

    this.saveCart(this.model);

    return this.model;
  }

  clearCart() {
    this.storageService.removeStorage(this.cartStoredName);
    this.model = null;
    this.cart$.next(null);
  }

  saveCart(data: any) {
    const model = JSON.stringify(data);
    this.storageService.setStorage(this.cartStoredName, model);
  }

  async getCart() {
    let data: any = this.cart$.value;

    if (!data) {
      data = await this.storageService.getStorage(this.cartStoredName);
      console.log(data);

      if (data?.value) {
        this.model = JSON.parse(data.value);
        this.cart$.next(this.model);
      }
    }
  }
}
