import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj !: Ipassenger;
  constructor() { }

  ngOnInit(): void {
  }

}
