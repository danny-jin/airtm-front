import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';

import { MobileNumberDetail } from '../../../core/models/base';

@Component({
  selector: 'app-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberInputComponent),
      multi: true,
    }
  ]
})
export class PhoneNumberInputComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() value: any;
  @Output() mobileChanged: EventEmitter<MobileNumberDetail> = new EventEmitter<MobileNumberDetail>();

  // @ts-ignore
  onChange;

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(value: any): void {
    if (this.onChange) {
      this.onChange(value?.number || '');
      if (value) {
        this.mobileChanged.emit(value);
      }
    }
  }
}


