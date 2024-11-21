import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
})
export class InfiniteScrollPage implements OnInit {
  data = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor() {}

  ngOnInit() {}

  loadData(): void {
    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const newArr = Array(20);
      this.data.push(...newArr);
      this.infiniteScroll.complete();
    }, 1500);
  }
}
