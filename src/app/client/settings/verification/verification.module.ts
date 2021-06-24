import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './verification.component';

@NgModule({
  declarations: [
    VerificationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LazyLoadImageModule,
    VerificationRoutingModule
  ]
})
export class VerificationModule { }
