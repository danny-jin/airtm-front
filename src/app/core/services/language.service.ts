import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { Option } from '../models/option';
import { languageList } from '../constants/language';
import enLanguage from '../../../assets/i18n/en.json';
import krLanguage from '../../../assets/i18n/kr.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // @ts-ignore
  language: Option<string> = null;

  language$: BehaviorSubject<Option<string>> = new BehaviorSubject<Option<string>>(this.language);

  constructor(
    private translate: TranslateService,
  ) { }

  initLanguage(): void {
    const languages = languageList.map((item: Option<string>) => {
      return item.value;
    });
    this.translate.addLangs(languages);
    this.translate.setTranslation('en', enLanguage);
    this.translate.setDefaultLang('en');
    this.setLanguage(languageList[0]);
  }

  setLanguage(lang: Option<string>): void {
    this.language = lang;
    this.language$.next(this.language);
  }

  switchLanguage(lang: Option<string>): void {
    this.setLanguage(lang);
    this.translate.use(lang.value);
    let languageFile = enLanguage;
    switch (lang.value) {
      case 'en':
        languageFile = enLanguage;
        break;
      case 'kr':
        languageFile = krLanguage;
        break;
    }
    this.translate.setTranslation(lang.value, languageFile);
  }

}
