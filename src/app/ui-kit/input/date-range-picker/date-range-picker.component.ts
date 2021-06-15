import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {

  @Input() label = '';
  @Output() chosenDate: EventEmitter<any> = new EventEmitter();

  defaultValue = { startDate: moment().add(-1, 'months'), endDate: moment() };

  constructor() { }

  ngOnInit(): void {
  }

  choose(): void {
    this.chosenDate.emit(this.defaultValue);
  }

}
