import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CryptoComponent } from './crypto.component';
import { ROUTES } from '../../core/constants/routes';

const routes: Routes = [
  { path: '', component: CryptoComponent, children: [
      {
        path: ROUTES.client.crypto.buy,
        loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule),
      },
      {
        path: ROUTES.client.crypto.sell,
        loadChildren: () => import('./sell/sell.module').then(m => m.SellModule),
      },
      { path: '**', redirectTo: ROUTES.client.crypto.buy, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
