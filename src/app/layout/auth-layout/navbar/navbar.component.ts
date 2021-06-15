import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';
import { headerHeight } from '../../../core/constants/base';
import { languageList } from '../../../core/constants/language';
import { Language } from '../../../core/models/language';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isSticky = false;
  languageList = languageList;
  language$ = this.languageService.language$;

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isSticky = window.scrollY > headerHeight;
  }

  switchLanguage(language: Language): void {
    this.languageService.switchLanguage(language);
  }

}
