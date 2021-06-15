import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { LandingLayoutComponent } from './landing-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LazyLoadImageModule,
    ScrollToModule.forRoot(),
    NgbModule,
    PipesModule
  ],
  exports: [
    LandingLayoutComponent
  ]
})
export class LandingLayoutModule { }
