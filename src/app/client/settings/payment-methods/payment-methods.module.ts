import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PaymentMethodsRoutingModule } from './payment-methods-routing.module';
import { PaymentMethodsComponent } from './payment-methods.component';

@NgModule({
  declarations: [
    PaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PaymentMethodsRoutingModule
  ]
})
export class PaymentMethodsModule { }
