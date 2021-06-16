import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-balance-menu',
  templateUrl: './balance-menu.component.html',
  styleUrls: ['./balance-menu.component.scss']
})
export class BalanceMenuComponent implements OnInit {

  // @ts-ignore
  @ViewChild(NgbDropdown) dropdown: NgbDropdown;
  isOpened = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openChanged(opened: boolean): void {
    this.isOpened = opened;
  }

}
