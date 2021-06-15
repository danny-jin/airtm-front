import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

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
    private translate: TranslateService,
  ) { }

  initLanguage(): void {
    const languages = languageList.map((item: Language) => {
      return item.code;
    });
    this.translate.addLangs(languages);
    this.translate.setTranslation('en', enLanguage);
    this.translate.setDefaultLang('en');
    this.setLanguage(languageList[0]);
  }

  setLanguage(lang: Language): void {
    this.language = lang;
    this.language$.next(this.language);
  }

  switchLanguage(lang: Language): void {
    this.setLanguage(lang);
    this.translate.use(lang.code);
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
  }

}
