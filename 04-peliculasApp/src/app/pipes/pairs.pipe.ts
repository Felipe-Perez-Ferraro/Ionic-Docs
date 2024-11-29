import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairs',
})
export class PairsPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    const pairs = arr.reduce((res, val, index, array) => {
      if (index % 2 === 0) {
        res.push(array.slice(index, index + 2));
      }
      return res;
    }, []);

    return pairs;
  }
}
