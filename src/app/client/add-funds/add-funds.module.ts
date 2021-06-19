import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule} from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';

import { IconModule } from '../../ui-kit/icon/icon.module';

import { AddFundsRoutingModule } from './add-funds-routing.module';
import { AddFundsComponent } from './add-funds.component';

@NgModule({
  declarations: [
    AddFundsComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    TranslateModule,
    IconModule,
    AddFundsRoutingModule
  ]
})
export class AddFundsModule { }
