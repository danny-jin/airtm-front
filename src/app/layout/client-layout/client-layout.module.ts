import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AvatarModule } from 'ngx-avatar';

import { IconModule } from '../../ui-kit/icon/icon.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../../ui-kit/common-ui-kit/common-ui-kit.module';

import { ClientLayoutComponent } from './client-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';
import { NotificationMenuComponent } from './navbar/notification-menu/notification-menu.component';
import { NotificationBoxComponent } from './navbar/notification-box/notification-box.component';
import { BalanceMenuComponent } from './navbar/balance-menu/balance-menu.component';
import { BalanceBoxComponent } from './navbar/balance-box/balance-box.component';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterMenuComponent,
    ProfileMenuComponent,
    NotificationMenuComponent,
    NotificationBoxComponent,
    BalanceMenuComponent,
    BalanceBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    TranslateModule,
    LazyLoadImageModule,
    AvatarModule,
    ScrollToModule.forRoot(),
    NgbDropdownModule,
    NgbPopoverModule,
    IconModule,
    PipesModule,
    CommonUiKitModule
  ]
})
export class ClientLayoutModule { }
