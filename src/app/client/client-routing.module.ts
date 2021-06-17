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
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.withdraw,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
        path: ROUTES.client.virtualCards,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.activity,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.peerTransfers,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.client.crypto,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
        path: ROUTES.client.settings,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
