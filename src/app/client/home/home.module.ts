import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    BalanceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
    TranslateModule,
    LazyLoadImageModule,
    PipesModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
