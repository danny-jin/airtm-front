import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Option } from '../../core/models/option';
import { ActivityFilterType } from '../../core/models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  filterOptions: Option<string>[] = [
    {
      label: this.translate.instant('client.activity.transaction-id'),
      value: ActivityFilterType.TransactionId
    },
    {
      label: this.translate.instant('client.activity.email'),
      value: ActivityFilterType.Email
    },
    {
      label: this.translate.instant('client.activity.name'),
      value: ActivityFilterType.Name
    },
    {
      label: this.translate.instant('client.activity.user-name'),
      value: ActivityFilterType.UserName
    },
  ];

  form: FormGroup = this.fb.group({
    filterType: [this.filterOptions[0].value, Validators.required],
    keyword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
