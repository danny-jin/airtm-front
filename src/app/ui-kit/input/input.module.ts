import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
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
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    PhoneNumberInputComponent,
    SelectComponent,
    DateRangePickerComponent,
    DatePickerComponent,
    CurrencyInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
    NgbDatepickerModule,
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
    DateRangePickerComponent,
    DatePickerComponent,
    CurrencyInputComponent
  ]
})
export class InputModule {
}
