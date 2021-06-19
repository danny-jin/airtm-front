import { Component, OnInit } from '@angular/core';

import { ROUTES } from '../../core/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ROUTES = ROUTES;
  showInviteFriends = true;

  constructor() { }

  ngOnInit(): void {
  }

}
