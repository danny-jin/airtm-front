import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoLetter'
})
export class TwoLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length < 2) {
      return '';
    }
    return value.substring(0, 2);
  }

}
