import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { HomeComponent } from './landing/home/home.component';

const routes: Routes = [
  // injected home module directly to the app module to improve the TTFB
  {
    path: '', component: LandingLayoutComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
