import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { ColorPipe } from './color.pipe';
import { OptionLabelPipe } from './option-label.pipe';
import { UntilPipe } from './until.pipe';
import { TwoLetterPipe } from './two-letter.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    ColorPipe,
    OptionLabelPipe,
    UntilPipe,
    TwoLetterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    ColorPipe,
    OptionLabelPipe,
    UntilPipe,
    TwoLetterPipe
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    OptionLabelPipe
  ]
})
export class PipesModule { }
