import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthLayoutModule } from '../layout/auth-layout/auth-layout.module';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthLayoutModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
