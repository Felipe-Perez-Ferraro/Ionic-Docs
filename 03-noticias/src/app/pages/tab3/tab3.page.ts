import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/news-response.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
})
export class Tab3Page {
  constructor(private storageService: StorageService) {}

  get articles(): Article[] {
    return this.storageService.localArticles;
  }
}
