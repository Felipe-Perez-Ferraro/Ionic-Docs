import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imagePath;

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): string | undefined {
    if (!img) {
      return;
    }

    const imgUrl = `${URL}/${size}${img}`;

    return imgUrl;
  }
}
