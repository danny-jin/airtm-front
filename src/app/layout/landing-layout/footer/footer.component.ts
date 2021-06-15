import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentLanguageCode = this.globalService.getLanguageCode();

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
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
