import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerComponent } from './spinner/spinner.component';
import { PasswordWeakValidationComponent } from './password-weak-validation/password-weak-validation.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    PasswordWeakValidationComponent,
    SeparatorComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  exports: [
    SpinnerComponent,
    PasswordWeakValidationComponent,
    SeparatorComponent
  ]
})
export class CommonUiKitModule { }
