import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.scss']
})
export class AddFundsComponent implements OnInit {

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
