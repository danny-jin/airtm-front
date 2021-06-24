import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Option } from '../../core/models/option';
import { ROUTES, toAbsolutePath } from '../../core/constants/routes';
import { ScrollPosition } from '../../core/constants/scroll-pos';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  menuItems = [
    {
      label: this.translate.instant('client.settings.profile.root'),
      value: toAbsolutePath([ROUTES.client.root, ROUTES.client.settings.root, ROUTES.client.settings.profile])
    },
    {
      label: this.translate.instant('client.settings.verification.root'),
      value: toAbsolutePath([ROUTES.client.root, ROUTES.client.settings.root, ROUTES.client.settings.verification])
    },
    {
      label: this.translate.instant('client.settings.security.root'),
      value: toAbsolutePath([ROUTES.client.root, ROUTES.client.settings.root, ROUTES.client.settings.security])
    },
    {
      label: this.translate.instant('client.settings.payment-methods.root'),
      value: toAbsolutePath([ROUTES.client.root, ROUTES.client.settings.root, ROUTES.client.settings.paymentMethods])
    },
    {
      label: this.translate.instant('client.settings.apps.root'),
      value: toAbsolutePath([ROUTES.client.root, ROUTES.client.settings.root, ROUTES.client.settings.apps])
    }
  ];

  form: FormGroup = this.fb.group({
    menuItem: [this.menuItems.find((item: Option<string>) => item.value === this.router.url)?.value
    || this.menuItems[0].value, Validators.required],
  });

  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService,
    private scrollToService: ScrollToService
  ) {
  }

  ngOnInit(): void {
    this.form.get('menuItem')?.valueChanges.pipe(
      takeUntil(this.unsubscribeAll$),
    ).subscribe(async (path: string) => {
      this.router.navigateByUrl(path).then(() => {
        this.scrollToService.scrollTo({ target: ScrollPosition.Root });
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  setMenu(path: string): void {
    this.form.get('menuItem')?.setValue(path);
  }

}
