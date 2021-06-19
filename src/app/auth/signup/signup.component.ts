import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import csc from 'country-state-city';
import { ICountry } from 'country-state-city';

import { CommonService } from '../../core/services/common.service';
import { PuzzleDialogService } from '../../shared/puzzle-dialog/puzzle-dialog.service';
import { UserType } from '../../core/models/auth';
import { Option } from '../../core/models/option';
import { confirmPasswordValidator } from '../../core/utils/validators.util';
import { signupForm } from '../../core/constants/form-label';
import { ROUTES } from '../../core/constants/routes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  ROUTES = ROUTES;
  prefix = signupForm.prefix;
  countryList: Option<string>[] = [];
  userTypeOptions = [
    {
      value: UserType.Individual,
      label: this.translate.instant('auth.signup.an-individual')
    },
    {
      value: UserType.Business,
      label: this.translate.instant('auth.signup.a-business')
    }
  ];

  benefits = [
    {
      icon: 'circle-dollar-symbol',
      text: 'auth.signup.save-and-spend-in-dollars'
    },
    {
      icon: 'swap',
      text: 'auth.signup.convert-e-money-to-cash-globally'
    },
    {
      icon: 'mobile',
      text: 'auth.signup.send-money-anywhere'
    },
    {
      icon: 'cubic',
      text: 'auth.signup.exchange-cryptocurrencies'
    },
    {
      icon: 'guard',
      text: 'auth.signup.fast-safe-reliable'
    }
  ];

  form: FormGroup = this.fb.group({
    type: [UserType.Individual, Validators.required],
    country: ['United States', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    secondLastName: ['']
  });

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private commonService: CommonService,
    private puzzleDialogService: PuzzleDialogService
  ) { }

  ngOnInit(): void {
    this.initCountry().then();
  }

  async initCountry(): Promise<void> {
    try {
      this.isLoading = true;
      this.countryList = csc.getAllCountries().map((item: ICountry) => {
        return {
          label: item.name,
          value: item.name
        };
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async signUp(): Promise<void> {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, signupForm, this.prefix);
      return;
    }
    const puzzleDialogRef = this.puzzleDialogService.openDialog();
    puzzleDialogRef.afterClosed().subscribe(async (puzzleSolved: boolean) => {
      if (puzzleSolved) {
        console.log('puzzle solved');
      }
    });
  }

}
