import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { PasswordStrengthType } from '../../../core/models/base';
import { validatePasswordStrength } from '../../../core/utils/password.util';

enum InputType {
  Text = 'text',
  Password = 'password'
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    }
  ]
})

export class PasswordInputComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() tooltip = false;
  @Input() showWeakAndNotification = false;
  // @ts-ignore
  @Input() value;
  // @ts-ignore
  @Input() readonly;

  // @ts-ignore
  onChange;

  InputType = InputType;
  type = InputType.Password;
  strengthType: any = PasswordStrengthType.None;

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

  change(value: string): void {
    if (this.onChange) {
      this.strengthType = validatePasswordStrength(value);
      this.onChange(value);
    }
  }

}

