import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';

@NgModule({
  declarations: [
    CryptoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ScrollToModule.forRoot(),
    PipesModule,
    CryptoRoutingModule
  ]
})
export class CryptoModule { }
