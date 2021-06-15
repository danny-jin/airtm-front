import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private cookieStore: any = {};

  constructor() {
  }

  parseCookies(cookies = document.cookie): void {
    this.cookieStore = {};
    if (!!cookies === false) {
      return;
    }
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split('=');
      this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
    }
  }

  get(key: string): any {
    this.parseCookies();
    return !!this.cookieStore[key] ? JSON.parse(this.cookieStore[key]) : null;
  }

  remove(key: string): void {
    document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
  }

  set(key: string, value: any): void {
    const now = new Date();
    now.setTime(now.getTime() + (environment.cookie.expireHour * 3600 * 1000));
    const expires = `expires=${now.toUTCString()}`;
    document.cookie = `${key}=${JSON.stringify(value)};${expires};path=/`;
  }

}
