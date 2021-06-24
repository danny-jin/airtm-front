import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { IconModule } from '../../../ui-kit/icon/icon.module';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';


@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    TranslateModule,
    LazyLoadImageModule,
    CommonUiKitModule,
    IconModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
