import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Option } from '../../../core/models/option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  @Input() label = '';
  // @ts-ignore
  @Input() value;
  // @ts-ignore
  @Input() readonly;
  @Input() dropdownFields = { text: 'label', value: 'value' };
  @Input() options: Option<any>[] = [];
  // @ts-ignore
  onChange;

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

  async change(event: any): Promise<void> {
    if (!event) {
      return;
    }
    this.value = event;
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

}
