import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';
import { Option } from '../../../core/models/option';
import { languageList } from '../../../core/constants/language';
import { headerHeight } from '../../../core/constants/base';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  headerHeight = headerHeight;
  languageList = languageList;
  language$ = this.languageService.language$;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  switchLanguage(language: Option<string>): void {
    this.languageService.switchLanguage(language);
  }

}
