import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFundsComponent } from './add-funds.component';

const routes: Routes = [
  { path: '', component: AddFundsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFundsRoutingModule { }
