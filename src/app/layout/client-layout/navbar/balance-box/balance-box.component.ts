import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.scss']
})
export class BalanceBoxComponent implements OnInit {

  @Input() isLoading = false;
  @Output() closeBox: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  showCurrency(event: any): void {
    console.log(event.checked);
  }

}
