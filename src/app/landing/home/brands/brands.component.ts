import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands = [
    {
      url: 'https://www.coindesk.com/airtm-airdrop-venezuela-crypto-donation-results',
      logo: 'assets/images/landing-pages/home/brands/coin-desk.png',
      altTag: 'Coindesk'
    },
    {
      url: 'https://www.bloomberg.com/news/articles/2018-04-04/venezuela-s-currency-is-doing-even-worse-than-previously-thought',
      logo: 'assets/images/landing-pages/home/brands/bloomberg.png',
      altTag: 'Bloomberg'
    },
    {
      url: 'https://techcrunch.com/2018/08/29/airtm-raises-7-million-to-fight-hyperinflation/',
      logo: 'assets/images/landing-pages/home/brands/tech-crunch.png',
      altTag: 'TechCrunch'
    },
    {
      url: 'https://www.airtm.com/en/clkn/https/www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/(https://www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/)',
      logo: 'assets/images/landing-pages/home/brands/pymnts.png',
      altTag: 'Pymnts'
    },
    {
      url: 'https://www.airtm.com/en/clkn/https/www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/(https://www.pymnts.com/news/international/latin-america/2018/airtm-vef-paypal-blockchain-venezuela/)',
      logo: 'assets/images/landing-pages/home/brands/wall-street-journal.png',
      altTag: 'Wall Street Journal'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
