import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RatingModule } from 'ng-starrating';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

// injected home module directly to the app module to improve the TTFB
/*import { HomeRoutingModule } from './home-routing.module';*/

import { HomeComponent } from './home.component';
import { YourDigitalDollarAccountComponent } from './your-digital-dollar-account/your-digital-dollar-account.component';
import { GlobalInfoComponent } from './global-info/global-info.component';
import { BrandsComponent } from './brands/brands.component';
import { SaveInDollarsComponent } from './save-in-dollars/save-in-dollars.component';
import { SendAndSpendGloballyComponent } from './send-and-spend-globally/send-and-spend-globally.component';
import { ReceivePaymentsForOnlineWorkComponent } from './receive-payments-for-online-work/receive-payments-for-online-work.component';
import { TouchlessMobilePaymentsComponent } from './touchless-mobile-payments/touchless-mobile-payments.component';
import { BuyAndSellCryptocurrenciesComponent } from './buy-and-sell-cryptocurrencies/buy-and-sell-cryptocurrencies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';

@NgModule({
  declarations: [
    HomeComponent,
    YourDigitalDollarAccountComponent,
    GlobalInfoComponent,
    BrandsComponent,
    SaveInDollarsComponent,
    SendAndSpendGloballyComponent,
    ReceivePaymentsForOnlineWorkComponent,
    TouchlessMobilePaymentsComponent,
    BuyAndSellCryptocurrenciesComponent,
    AboutUsComponent,
    TestimonialsComponent,
    HowToStartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LazyLoadImageModule,
    RatingModule,
    PipesModule,
    // injected home module directly to the app module to improve the TTFB
    /*HomeRoutingModule,*/
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
