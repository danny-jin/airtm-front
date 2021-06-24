import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppsRoutingModule } from './apps-routing.module';
import { AppsComponent } from './apps.component';

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LazyLoadImageModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
