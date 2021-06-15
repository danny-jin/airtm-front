import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CookieService } from './cookie.service';
import { ToastrService } from './toastr.service';
import { ChangePasswordDto, LoginDto, TokenResponse, ResetPasswordInfo, User, UserRole } from '../models/auth';
import { ROUTES } from '../constants/routes';
import { SuccessResponse } from '../models/base';
import { ScrollPosition } from '../constants/scroll-pos';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @ts-ignore
  user: User = null;
  fromAuth = false; // for email verification page, email verification page is only available when navigate from auth pages.
  fromLogout = false; // when we click logout button, we need to set this variable true to reload login page
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  fromAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.fromAuth);
  fromLogout$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.fromLogout);

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor(
    private router: Router,
    private http: HttpClient,
    private translate: TranslateService,
    private scrollToService: ScrollToService,
    private toastr: ToastrService,
    private cookieService: CookieService,
  ) { }

  get accessToken(): string {
    return this.cookieService.get(environment.cookie.accessToken);
  }

  // @ts-ignore
  set accessToken(value: string): void {
    this.cookieService.set(environment.cookie.accessToken, value);
  }

  get twoFactorVerified(): boolean {
    return this.cookieService.get(environment.cookie.twoFactorVerified);
  }

  // @ts-ignore
  set twoFactorVerified(value: boolean): void {
    this.cookieService.set(environment.cookie.twoFactorVerified, value);
  }

  get isLoggedIn(): boolean {
    return Boolean(this.accessToken);
  }

  login(payload: LoginDto): Observable<TokenResponse> {
    const url = `${ environment.api }/auth/login`;
    return this.http.post<TokenResponse>(url, payload).pipe(
      tap(res => {
        this.authenticateUser(res.accessToken);
      })
    );
  }

  register(payload: LoginDto): Observable<SuccessResponse> {
    const url = `${ environment.api }/auth/register`;
    return this.http.post<SuccessResponse>(url, payload);
  }

  resetPassword(resetPasswordInfo: ResetPasswordInfo): Observable<SuccessResponse> {
    const url = `${ environment.api }/auth/reset-password`;
    return this.http.post<SuccessResponse>(url, resetPasswordInfo);
  }

  changePassword(payload: ChangePasswordDto): Observable<SuccessResponse> {
    const url = `${ environment.api }/auth/change-password`;
    return this.http.post<SuccessResponse>(url, payload);
  }

  setUser(user: User): void {
    this.user = user;
    this.user$.next(this.user);
  }

  setFromAuth(value: boolean): void {
    this.fromAuth = value;
    this.fromAuth$.next(this.fromAuth);
  }

  setFromLogout(value: boolean): void {
    this.fromLogout = value;
    this.fromLogout$.next(this.fromLogout);
  }

  authenticateUser(token: string): void {
    this.accessToken = token;
    this.isLoggedIn$.next(this.isLoggedIn);
    const user = this.decodeToken();
    user.updatedAt = new Date().toISOString();
    this.setUser(user);
  }

  decodeToken(): User {
    return jwtDecode(this.accessToken);
  }

  getProfile(): Observable<TokenResponse> {
    const url = `${ environment.api }/auth/profile`;
    return this.http.get<TokenResponse>(url).pipe(
      tap(res => {
        if (res.accessToken) {
          this.setUser(jwtDecode(res.accessToken));
        }
      })
    );
  }

  activeAccount(): Observable<SuccessResponse> {
    const url = `${ environment.api }/auth/active-account`;
    return this.http.get<SuccessResponse>(url);
  }

  async navigateByUserRole(role?: UserRole): Promise<void> {
    if (!role) {
      const token = await this.decodeToken();
      role = token.role;
    }
    if (role === UserRole.User) {
      // this.router.navigate([ROUTES.my.root, ROUTES.my.dashboard]).then(() => {
      //   this.scrollToService.scrollTo({ target: ScrollPosition.Root });
      // });
    } else {
      await this.logout();
    }
  }

  async logout(callApi = false): Promise<void> {
    if (callApi) {
      const url = `${ environment.api }/auth/logout`;
      await this.http.get<SuccessResponse>(url).toPromise();
    }
    this.accessToken = '';
    this.twoFactorVerified = false;
    this.isLoggedIn$.next(this.isLoggedIn);
    // @ts-ignore
    this.user = null;
    this.user$.next(this.user);
    // this.router.navigate([ROUTES.auth.login]).then(() => {
    //   this.setFromLogout(true);
    //   this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    // });
  }



}
