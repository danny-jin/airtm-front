import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingLayoutComponent } from '../layout/landing-layout/landing-layout.component';
import { ROUTES } from '../core/constants/routes';

const routes: Routes = [
  {
    path: '', component: LandingLayoutComponent, children: [
      {
        path: ROUTES.landingPages.virtualCard,
        loadChildren: () => import('./virtual-card/virtual-card.module').then(m => m.VirtualCardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
