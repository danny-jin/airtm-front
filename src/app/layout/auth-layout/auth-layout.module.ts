import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AuthLayoutComponent } from './auth-layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule
  ]
})
export class AuthLayoutModule { }
