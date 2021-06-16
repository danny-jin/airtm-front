import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {

  @Input() separatorText = '';
  @Input() height = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
