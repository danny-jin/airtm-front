import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { GlobalService } from './global.service';
import { Language } from '../models/language';
import { languageList } from '../constants/language';
import enLanguage from '../../../assets/i18n/en.json';
import krLanguage from '../../../assets/i18n/kr.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // @ts-ignore
  language: Language = null;

  language$: BehaviorSubject<Language> = new BehaviorSubject<Language>(this.language);

  constructor(
    private router: Router,
    private translate: TranslateService,
    private globalService: GlobalService
  ) { }

  initLanguage(languageCode = null): void {
    const languages = languageList.map((item: Language) => {
      return item.code;
    });
    this.translate.addLangs(languages);
    const found = languageList.find((item: any) => item.code === languageCode);
    if (found) {
      this.globalService.setLanguageCode(found.code);
      this.switchLanguage(found);
    } else {
      this.router.navigateByUrl(languages[0]).then();
    }
  }

  setLanguage(lang: Language): void {
    this.language = lang;
    this.language$.next(this.language);
  }

  switchLanguage(lang: Language): void {
    this.setLanguage(lang);
    let languageFile = enLanguage;
    switch (lang.code) {
      case 'en':
        languageFile = enLanguage;
        break;
      case 'kr':
        languageFile = krLanguage;
        break;
    }
    this.translate.setTranslation(lang.code, languageFile);
    this.translate.use(lang.code);
  }

}
