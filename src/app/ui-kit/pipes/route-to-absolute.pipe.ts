import { Pipe, PipeTransform } from '@angular/core';
import { toAbsolutePath } from '../../core/constants/routes';

@Pipe({
  name: 'routeToAbsolute'
})
export class RouteToAbsolutePipe implements PipeTransform {

  transform(value: string | string[]): string {
    return toAbsolutePath(value);
  }

}
