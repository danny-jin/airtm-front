import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule} from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';

import { IconModule } from '../../ui-kit/icon/icon.module';

import { WithdrawFundsRoutingModule } from './withdraw-funds-routing.module';
import { WithdrawFundsComponent } from './withdraw-funds.component';

@NgModule({
  declarations: [
    WithdrawFundsComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    TranslateModule,
    IconModule,
    WithdrawFundsRoutingModule
  ]
})
export class WithdrawFundsModule { }
