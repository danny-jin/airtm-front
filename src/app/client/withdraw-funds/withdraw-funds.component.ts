import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-withdraw-funds',
  templateUrl: './withdraw-funds.component.html',
  styleUrls: ['./withdraw-funds.component.scss']
})
export class WithdrawFundsComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatStepper) stepper: MatStepper;

  isStepperEditable = false;

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.stepper.previous();
  }

  next(): void {
    this.stepper.next();
  }

  reset(): void {
    this.stepper.reset();
  }

}
