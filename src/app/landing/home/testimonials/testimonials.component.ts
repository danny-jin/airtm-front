import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      name: 'argenis',
      text: '"I have been using Airtm for more than two years. I have completed transactions from my bank account to several wallets and back. Everything is satisfactory and in record time. Good exchange rate."',
      rate: 5
    },
    {
      name: 'daniel',
      text: '"Airtm is where I can keep my money save. When I need to withdraw, the transaction takes less than 20 minutes."',
      rate: 5
    },
    {
      name: 'karlys',
      text: '"I love the platform. The simplicity, especially the wide variety of payment methods. I live in Venezuela and find obtaining foreign currency very difficult.. There is noting like Airtm."',
      rate: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
