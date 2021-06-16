import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import csc from 'country-state-city';
import { ICountry } from 'country-state-city';

import { CommonService } from '../../core/services/common.service';
import { PuzzleDialogService } from '../../shared/puzzle-dialog/puzzle-dialog.service';
import { MobileNumberDetail } from '../../core/models/base';
import { Option } from '../../core/models/option';
import { completeProfileForm } from '../../core/constants/form-label';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  isLoading = false;
  prefix = completeProfileForm.prefix;
  countryList: Option<string>[] = [];
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    secondLastName: ['', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: [''],
    city: ['', Validators.required],
    country: ['United States', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    phone: ['', Validators.required],
    mobile: [''],
    birthday: [new Date('1990-01-01').getTime(), Validators.required],
    inviter: ['']
  });

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private puzzleDialogService: PuzzleDialogService
  ) { }

  ngOnInit(): void {
    this.countryList = csc.getAllCountries().map((item: ICountry) => {
      return {
        label: item.name,
        value: item.name
      };
    });
  }

  mobileChanged(mobile: MobileNumberDetail): void {
    this.form.get('phone')?.setValue(mobile.e164Number);
  }

  chosenDate(date: string): void {
    this.form.get('birthday')?.setValue(new Date(date).getTime());
  }

  verifyProfile(): void {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, completeProfileForm, this.prefix);
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
