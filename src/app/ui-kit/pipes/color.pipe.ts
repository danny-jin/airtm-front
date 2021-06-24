import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    'dodger-blue': '#1783FA', // primary color
    'mountain-meadow': '#0ECB81', // success color
    'my-sin': '#ffb82a', // warning color
    'blue-bayoux': '#526474', // info color
    'brick-red': '#CF304A', // danger color
    'dodger-blue-01': '#1aa0fc',
    downriver: '#0A2540',
    'blue-romance': '#D1F4D9',
    'humming-bird': '#D0F3F8',
    peach: '#FFE4BC',
    cosmos: '#FED6DB',
    'catskill-white': '#F6F9FB',
    'hit-gray': '#A9B1B9',
    white: '#FFFFFF'
  };

  transform(value: string): string {
    // @ts-ignore
    return this.colors[value] || value;
  }
}
