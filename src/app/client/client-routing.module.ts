import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientLayoutComponent } from '../layout/client-layout/client-layout.component';
import { ROUTES } from '../core/constants/routes';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: ROUTES.client.home, pathMatch: 'full' },
      {
        path: ROUTES.client.home,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.add,
        loadChildren: () => import('./add-funds/add-funds.module').then(m => m.AddFundsModule),
      },
      {
        path: ROUTES.client.withdraw,
        loadChildren: () => import('./withdraw-funds/withdraw-funds.module').then(m => m.WithdrawFundsModule),
      },
      {
        path: ROUTES.client.transfers,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.sendRequest,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.virtualCards.root,
        loadChildren: () => import('./virtual-cards/virtual-cards.module').then(m => m.VirtualCardsModule),
      },
      {
        path: ROUTES.client.activity,
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule),
      },
      {
        path: ROUTES.client.peerTransfers,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.crypto.root,
        loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule),
      },
      {
        path: ROUTES.client.inviteFriends,
        loadChildren: () => import('./invite-friends/invite-friends.module').then(m => m.InviteFriendsModule),
      },
      {
        path: ROUTES.client.storeDirectory,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.settings.root,
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
