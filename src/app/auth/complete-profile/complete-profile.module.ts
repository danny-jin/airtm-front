import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { InputModule } from '../../ui-kit/input/input.module';
import { IconModule } from '../../ui-kit/icon/icon.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';
import { PuzzleDialogModule } from '../../shared/puzzle-dialog/puzzle-dialog.module';

import { CompleteProfileRoutingModule } from './complete-profile-routing.module';
import { CompleteProfileComponent } from './complete-profile.component';

@NgModule({
  declarations: [
    CompleteProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ScrollToModule,
    LazyLoadImageModule,
    InputModule,
    IconModule,
    PipesModule,
    CommonUiKitModule,
    PuzzleDialogModule,
    CompleteProfileRoutingModule
  ]
})
export class CompleteProfileModule { }
