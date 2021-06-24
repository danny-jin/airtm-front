import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '../../core/constants/routes';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent, children: [
      {
        path: ROUTES.client.settings.profile,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: ROUTES.client.settings.verification,
        loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule),
      },
      {
        path: ROUTES.client.settings.security,
        loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
      },
      {
        path: ROUTES.client.settings.paymentMethods,
        loadChildren: () => import('./payment-methods/payment-methods.module').then(m => m.PaymentMethodsModule),
      },
      {
        path: ROUTES.client.settings.apps,
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
      },
      { path: '**', redirectTo: ROUTES.client.settings.profile, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
