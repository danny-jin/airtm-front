import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';

@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }
