import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VirtualCardComponent } from './virtual-card.component';

const routes: Routes = [
  { path: '', component: VirtualCardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualCardRoutingModule { }
