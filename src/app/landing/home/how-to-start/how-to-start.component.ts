import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-start',
  templateUrl: './how-to-start.component.html',
  styleUrls: ['./how-to-start.component.scss']
})
export class HowToStartComponent implements OnInit {

  steps = [
    { description: 'landing.home.how-to-start.create-your-account-at-no-cost' },
    { description: 'landing.home.how-to-start.add-funds-using-your-local-currency' },
    { description: 'landing.home.how-to-start.save-send-spend-and-withdraw' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
