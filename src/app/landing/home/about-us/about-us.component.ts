import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUsItems = [
    {
      icon: 'assets/images/landing-pages/home/free-market-rates.png',
      altTag: 'Free market rates',
      title: 'landing.home.about-us.free-market-rates',
      description: 'Send money across borders at real exchange rates without restrictions.'
    },
    {
      icon: 'assets/images/landing-pages/home/safe-and-reliable.png',
      altTag: 'Safe and reliable',
      title: 'landing.home.about-us.safe-and-reliable',
      description: 'Escrowed transactions and verified experienced peers.'
    },
    {
      icon: 'assets/images/landing-pages/home/info.png',
      altTag: 'Available 24/7',
      title: 'landing.home.about-us.available-24-7',
      description: 'Our support team and peer network at your service.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
