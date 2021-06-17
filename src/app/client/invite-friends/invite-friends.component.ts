import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { defaultDebounceTime } from '../../core/constants/base';
import { validateEmail } from '../../core/utils/string.util';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss']
})
export class InviteFriendsComponent implements OnInit, OnDestroy {

  emailList: string[] = [];
  form: FormGroup = this.fb.group({
    emails: ['', Validators.required],
    referralLink: ['https://app.airtm.com/ivt/danny5krge50h', Validators.required]
  });

  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private clipboard: Clipboard,
  ) { }

  ngOnInit(): void {
    this.form.get('emails')?.valueChanges.pipe(
      takeUntil(this.unsubscribeAll$),
      debounceTime(defaultDebounceTime)
    ).subscribe(async (value: string) => {
      this.emailList = [];
      const emails = value.split(',');
      if (emails && emails.length) {
        emails.forEach((email: string) => {
          if (validateEmail(email)) {
            this.emailList.push(email);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  copyLink(link: string): void {
    if (!link.length) {
      return;
    }
    this.clipboard.copy(link);
  }

}
