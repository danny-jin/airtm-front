import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.scss']
})
export class GlobalInfoComponent implements OnInit {

  globalInfoItems = [
    {
      symbol: '+',
      value: 1000000,
      suffix: '',
      description: 'landing.home.global-info.happy-members'
    },
    {
      symbol: '',
      value: 12808257,
      suffix: '',
      description: 'landing.home.global-info.transactions-completed'
    },
    {
      symbol: '+',
      value: 300,
      suffix: '',
      description: 'landing.home.global-info.banks-e-money-networks'
    },
    {
      symbol: '<',
      value: 10,
      suffix: ' min',
      description: 'landing.home.global-info.transaction-speed'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
