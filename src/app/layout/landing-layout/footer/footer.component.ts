import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuItems = [
    {
      title: 'footer.landing.company.root',
      menu: [
        { label: 'footer.landing.company.about-us', url: '' },
        { label: 'footer.landing.company.jobs', url: '' },
        { label: 'footer.landing.company.press', url: '' },
        { label: 'footer.landing.company.partners', url: '' },
      ]
    },
    {
      title: 'footer.landing.help.root',
      menu: [
        { label: 'footer.landing.help.blog', url: '' },
        { label: 'footer.landing.help.faqs', url: '' },
        { label: 'footer.landing.help.rates', url: '' },
      ]
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
