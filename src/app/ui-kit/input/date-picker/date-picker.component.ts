import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() value: any;
  @Output() chosenDate: EventEmitter<any> = new EventEmitter();

  // @ts-ignore
  onChange;

  defaultValue: any = { year: 1990, month: 1, day: 1 };

  constructor() {
  }

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

  choose(): void {
    this.chosenDate.emit(`${ this.defaultValue.year }-${ this.defaultValue.month }-${ this.defaultValue.day }`);
  }

}
