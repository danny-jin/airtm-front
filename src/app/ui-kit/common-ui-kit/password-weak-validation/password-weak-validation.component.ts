import { Component, Input, OnInit } from '@angular/core';

import { PasswordStrengthType } from '../../../core/models/base';

@Component({
  selector: 'app-password-weak-validation',
  templateUrl: './password-weak-validation.component.html',
  styleUrls: ['./password-weak-validation.component.scss']
})
export class PasswordWeakValidationComponent implements OnInit {

  @Input() strengthType = PasswordStrengthType.None;

  PasswordStrengthType = PasswordStrengthType;

  constructor() { }

  ngOnInit(): void {
  }

}
