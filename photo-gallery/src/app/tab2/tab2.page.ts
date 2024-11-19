import { Component, inject } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserPhoto } from '../interfaces/user-photo.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page {
  private photoService = inject(PhotoService);

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  userPhotos(): UserPhoto[] {
    return this.photoService.userPhotosArr;
  }
}
