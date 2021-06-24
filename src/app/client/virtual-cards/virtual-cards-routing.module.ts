import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VirtualCardsComponent } from './virtual-cards.component';
import { FormComponent } from './form/form.component';
import { ROUTES } from '../../core/constants/routes';

const routes: Routes = [
  { path: '', component: VirtualCardsComponent },
  { path: ROUTES.client.virtualCards.form, component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualCardsRoutingModule { }
