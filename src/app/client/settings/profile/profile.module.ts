import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';

import { CommonUiKitModule } from '../../../ui-kit/common-ui-kit/common-ui-kit.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { IconModule } from '../../../ui-kit/icon/icon.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AvatarModule,
    CommonUiKitModule,
    InputModule,
    IconModule,
    PipesModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
