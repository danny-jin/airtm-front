import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { InputModule } from '../../ui-kit/input/input.module';

import { VirtualCardsRoutingModule } from './virtual-cards-routing.module';
import { VirtualCardsComponent } from './virtual-cards.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    VirtualCardsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    TranslateModule,
    ScrollToModule.forRoot(),
    LazyLoadImageModule,
    PipesModule,
    IconModule,
    InputModule,
    VirtualCardsRoutingModule
  ]
})
export class VirtualCardsModule { }
