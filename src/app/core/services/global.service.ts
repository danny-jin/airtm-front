import { Injectable } from '@angular/core';

import { CookieService } from './cookie.service';
import { environment } from '../../../environments/environment';
import { languageList } from '../constants/language';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  setLanguageCode(languageCode: string): void {
    this.cookieService.set(environment.cookie.languageCode, languageCode);
  }

  getLanguageCode(): string {
    return this.cookieService.get(environment.cookie.languageCode) || languageList[0].code;
  }

}
