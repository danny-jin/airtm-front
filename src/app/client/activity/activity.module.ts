import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { InputModule } from '../../ui-kit/input/input.module';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';

@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
