import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { HomeComponent } from './landing/home/home.component';

import { AppComponent } from './app.component';

import { ROUTES } from './core/constants/routes';

const routes: Routes = [
  { path: ':languageCode', component: AppComponent, children: [
      // injected home module directly to the app module to improve the TTFB
      {
        path: '', component: LandingLayoutComponent,
        children: [{ path: '', component: HomeComponent }]
      },
      { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
    ]
  },
  { path: '**', redirectTo: ROUTES.lang.en },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
