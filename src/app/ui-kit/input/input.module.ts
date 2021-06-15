import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { IconModule } from '../icon/icon.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PhoneNumberInputComponent } from './phone-number-input/phone-number-input.component';
import { SelectComponent } from './select/select.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    PhoneNumberInputComponent,
    SelectComponent,
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DropDownListModule,
    NgxIntlTelInputModule,
    NgxDaterangepickerMd.forRoot(),
    IconModule,
    CommonUiKitModule
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    PhoneNumberInputComponent,
    SelectComponent,
    DateRangePickerComponent
  ]
})
export class InputModule {
}
