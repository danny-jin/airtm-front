import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { GlobalService } from '../../../core/services/global.service';
import { NavItem } from '../../../core/models/nav';
import { languageList } from '../../../core/constants/language';
import { ROUTES } from '../../../core/constants/routes';

const headerHeight = 90;

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

  showMobileMenu = false;
  isSticky = false;
  currentLanguageCode = this.globalService.getLanguageCode();
  menuItems: NavItem[] = [
    { label: 'navbar.landing.store-directory', route: 'https://directory.airtm.com', isExternalLink: true },
    { label: 'navbar.landing.virtual-card', route: [this.currentLanguageCode, ROUTES.landingPages.virtualCard] },
    { label: 'navbar.landing.rates', route: 'https://rates.airtm.com', isExternalLink: true },
    { label: 'navbar.landing.blog', route: 'https://blog.airtm.com', isExternalLink: true },
  ];
  ROUTES = ROUTES;
  languageList = languageList;

  constructor(
    private router: Router,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isSticky = window.scrollY > headerHeight;
  }

  switchLanguage(languageCode: string): void {
    const url = `${ languageCode }${ this.router.url.slice(3) }`;
    this.router.navigateByUrl(url).then(() => {
      location.reload();
    });
  }

}
