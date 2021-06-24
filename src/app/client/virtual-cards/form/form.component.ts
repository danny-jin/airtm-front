import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { CommonService } from '../../../core/services/common.service';
import { virtualCardForm } from '../../../core/constants/form-label';
import { ROUTES } from '../../../core/constants/routes';
import { defaultDebounceTime } from '../../../core/constants/base';

@Component({
  selector: 'app-virtual-card-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  prefix = virtualCardForm.prefix;
  localCurrencyCode = 'SGD';
  setupFee = 3.7;
  fundingFee = 0;
  serviceFee = 0;
  localCurrencyRate = 1.35;
  minimumCardValue = 1.25;
  maximumCardValue = 100;
  isWarning = false;
  showDetail = false;
  form: FormGroup = this.fb.group({
    cardName: ['', Validators.required],
    cardValue: [0, Validators.required],
    localCurrencyEquivalent: [0, Validators.required],
    totalCost: [0, Validators.required],
    fundingFee: [3],
    serviceFee: [1],
    isConfirmed: [false]
  });

  ROUTES = ROUTES;
  cardValueChangedByCalculation = false;
  localCurrencyEquivalentChangedByCalculation = false;
  totalCostChangedByCalculation = false;

  private unsubscribeAll$: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
  ) { }

  validateCardValue(): void {
    const cardValue = Number(this.form.get('cardValue')?.value) || 0;
    if (cardValue < this.minimumCardValue || cardValue > this.maximumCardValue) {
      this.isWarning = true;
    } else {
      this.isWarning = false;
    }
  }

  calculateTotalCost(): void {
    const cardValue = Number(this.form.get('cardValue')?.value) || 0;
    this.fundingFee = cardValue / 100 * 3;
    this.serviceFee = cardValue / 100;
    const totalCost = Number((cardValue + this.serviceFee + this.fundingFee + this.serviceFee).toFixed(2));
    this.form.get('totalCost')?.setValue(totalCost);
  }

  ngOnInit(): void {
    this.form.get('cardValue')?.valueChanges.pipe(
      takeUntil(this.unsubscribeAll$),
      debounceTime(defaultDebounceTime)
    ).subscribe(async (cardValue: number) => {
      if (this.cardValueChangedByCalculation) {
        this.cardValueChangedByCalculation = false;
        return;
      }
      if (!cardValue) {
        return;
      }
      this.form.get('localCurrencyEquivalent')?.setValue(cardValue * this.localCurrencyRate);
      this.calculateTotalCost();
      this.localCurrencyEquivalentChangedByCalculation = true;
      this.totalCostChangedByCalculation = true;
      this.validateCardValue();
    });

    this.form.get('localCurrencyEquivalent')?.valueChanges.pipe(
      takeUntil(this.unsubscribeAll$),
      debounceTime(defaultDebounceTime)
    ).subscribe(async (localCurrencyEquivalent: number) => {
      if (this.localCurrencyEquivalentChangedByCalculation) {
        this.localCurrencyEquivalentChangedByCalculation = false;
        return;
      }
      if (!localCurrencyEquivalent) {
        return;
      }
      this.form.get('cardValue')?.setValue(localCurrencyEquivalent / this.localCurrencyRate);
      this.calculateTotalCost();
      this.cardValueChangedByCalculation = true;
      this.totalCostChangedByCalculation = true;
      this.validateCardValue();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  next(): void {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, virtualCardForm, this.prefix);
      return;
    }
  }

}
