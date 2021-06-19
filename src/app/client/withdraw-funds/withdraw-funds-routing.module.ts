import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithdrawFundsComponent } from './withdraw-funds.component';

const routes: Routes = [
  { path: '', component: WithdrawFundsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawFundsRoutingModule { }
