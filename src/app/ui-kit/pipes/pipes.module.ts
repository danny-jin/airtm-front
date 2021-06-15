import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { ColorPipe } from './color.pipe';
import { OptionLabelPipe } from './option-label.pipe';
import { UntilPipe } from './until.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    ColorPipe,
    OptionLabelPipe,
    UntilPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    ColorPipe,
    OptionLabelPipe,
    UntilPipe
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    OptionLabelPipe
  ]
})
export class PipesModule { }
