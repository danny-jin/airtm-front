import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent implements OnInit {

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
