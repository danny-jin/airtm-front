import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Currencies } from 'currencies-map';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyInputComponent),
      multi: true,
    }
  ]
})
export class CurrencyInputComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'number';
  @Input() hasCopyLink = false;
  @Input() isCurrencyLocked = true;
  @Input() currencyCode = 'USD';
  @Input() selectedLocalCurrencyCode = 'SGD';
  // @ts-ignore
  @Input() value;
  // @ts-ignore
  @Input() readonly;

  // @ts-ignore
  onChange;

  currencyNameKeys = [...Currencies.names.keys()];
  localCurrencyOptions = this.currencyNameKeys.map((item) => {
      return {
        label: item,
        value: item
      };
    }
  );

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
    const searchRegExp = /,/gi;
    const replaceWith = '';
    value = value.replace(searchRegExp, replaceWith);
    // only when change method registered
    if (this.onChange) {
      this.onChange(Number(value));
    }
  }

  currencyChanged(value: string): void {
  }

}
