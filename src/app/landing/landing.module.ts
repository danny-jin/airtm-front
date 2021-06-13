import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutModule } from '../layout/landing-layout/landing-layout.module';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingLayoutModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
