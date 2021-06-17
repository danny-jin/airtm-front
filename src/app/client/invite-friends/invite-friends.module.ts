import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { InputModule } from '../../ui-kit/input/input.module';
import { IconModule } from '../../ui-kit/icon/icon.module';

import { InviteFriendsRoutingModule } from './invite-friends-routing.module';
import { InviteFriendsComponent } from './invite-friends.component';

@NgModule({
  declarations: [
    InviteFriendsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LazyLoadImageModule,
    InputModule,
    IconModule,
    InviteFriendsRoutingModule
  ]
})
export class InviteFriendsModule { }
