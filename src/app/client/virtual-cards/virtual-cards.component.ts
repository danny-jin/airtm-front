import { Component, OnInit } from '@angular/core';

import { ROUTES } from '../../core/constants/routes';

@Component({
  selector: 'app-virtual-cards',
  templateUrl: './virtual-cards.component.html',
  styleUrls: ['./virtual-cards.component.scss']
})
export class VirtualCardsComponent implements OnInit {

  descriptions = [
    {
      icon: 'card',
      text: 'client.virtual-cards.non-reloadable'
    },
    {
      icon: 'dollar',
      text: 'client.virtual-cards.card-is-non-refundable'
    },
    {
      icon: 'earth',
      text: 'client.virtual-cards.use-anywhere'
    },
    {
      icon: 'location',
      text: 'client.virtual-cards.when-inputting'
    },
  ];

  ROUTES = ROUTES;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
