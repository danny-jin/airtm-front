import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currencies } from 'currencies-map';
import timezones from 'timezones-list';

import { CommonService } from '../../../core/services/common.service';
import { Option } from '../../../core/models/option';
import { languageList } from '../../../core/constants/language';
import { specialsForm } from '../../../core/constants/form-label';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName = 'Danny Jin';
  languageList = languageList;
  prefix = specialsForm.prefix;

  localCurrencyOptions: Option<string>[] = [];
  timezoneOptions = timezones.map((item: any) => {
    return {
      label: item.label,
      value: item.utc
    };
  });

  commonForm: FormGroup = this.fb.group({
    localCurrency: ['', Validators.required],
    language: [languageList[0].value, Validators.required],
    timezone: [this.timezoneOptions[0].value, Validators.required],
  });

  emailForm: FormGroup = this.fb.group({
    secondaryEmail: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    const currencyNameKeys = [...Currencies.names.keys()];
    const currencyNameValues = [...Currencies.names.values()];
    this.localCurrencyOptions = currencyNameKeys.map((item, index) => {
        return {
          label: `${ item } - ${ currencyNameValues[index] }`,
          value: Currencies.symbols.get(item) || ''
        };
      }
    );
    this.commonForm.get('localCurrency')?.setValue(this.localCurrencyOptions[0].value);
  }

  verifyEmail(): void {
    if (this.emailForm.invalid) {
      this.commonService.findInvalidField(this.emailForm, specialsForm, this.prefix);
      return;
    }
  }

}
