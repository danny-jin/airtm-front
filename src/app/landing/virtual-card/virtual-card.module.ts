import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualCardRoutingModule } from './virtual-card-routing.module';
import { VirtualCardComponent } from './virtual-card.component';


@NgModule({
  declarations: [
    VirtualCardComponent
  ],
  imports: [
    CommonModule,
    VirtualCardRoutingModule
  ]
})
export class VirtualCardModule { }
