import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'until'
})
export class UntilPipe implements PipeTransform {

  transform(current: any, option: any, until: any): boolean {
    const order = Object.keys(option).map(key => option[key]);
    return order.findIndex(x => x === until) - 1 > order.findIndex(x => x === current);
  }

}
