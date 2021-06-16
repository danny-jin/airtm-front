import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { ROUTES } from '../core/constants/routes';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: ROUTES.auth.login },
      { path: ROUTES.auth.login, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: ROUTES.auth.signUp, loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
      {
        path: ROUTES.auth.completeProfile,
        loadChildren: () => import('./complete-profile/complete-profile.module').then(m => m.CompleteProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
