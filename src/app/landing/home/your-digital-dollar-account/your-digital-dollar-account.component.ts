import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-digital-dollar-account',
  templateUrl: './your-digital-dollar-account.component.html',
  styleUrls: ['./your-digital-dollar-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourDigitalDollarAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
