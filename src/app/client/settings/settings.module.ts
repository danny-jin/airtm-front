import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../ui-kit/input/input.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ScrollToModule.forRoot(),
    LazyLoadImageModule,
    PipesModule,
    InputModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
