import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { NavItem } from '../../../core/models/nav';
import { languageList } from '../../../core/constants/language';
import { landingHeaderHeight } from '../../../core/constants/base';
import { ROUTES } from '../../../core/constants/routes';
import { LanguageService } from '../../../core/services/language.service';
import { Option } from '../../../core/models/option';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('indicatorFade', [
      state('visible', style({ overflow: 'hidden', height: '*' })),
      state('hidden', style({ opacity: '0', overflow: 'hidden', height: '0' })),
      transition('visible => hidden', animate('500ms ease-in-out')),
      transition('hidden => visible', animate('500ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  ROUTES = ROUTES;
  languageList = languageList;
  showMobileMenu = false;
  isSticky = false;
  menuItems: NavItem[] = [
    { label: 'navbar.landing.store-directory', route: 'https://directory.airtm.com', isExternalLink: true },
    { label: 'navbar.landing.virtual-card', route: [ROUTES.landingPages.virtualCard] },
    { label: 'navbar.landing.rates', route: 'https://rates.airtm.com', isExternalLink: true },
    { label: 'navbar.landing.blog', route: 'https://blog.airtm.com', isExternalLink: true },
  ];

  language$ = this.languageService.language$;

  constructor(
    private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isSticky = window.scrollY > landingHeaderHeight;
  }

  switchLanguage(language: Option<string>): void {
    this.languageService.switchLanguage(language);
  }

}
