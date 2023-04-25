import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pasenger-dashboard',
  templateUrl: './pasenger-dashboard.component.html',
  styleUrls: ['./pasenger-dashboard.component.scss'],
  providers : [PassengerService]
})
export class PasengerDashboardComponent implements OnInit {
passengerInstance ! :PassengerService;
passengerArray : Array<Ipassenger> = [];
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {this.passengerArray = this._passengerService.passengerArray
    // this.passengerInstance = new PassengerService();
    console.log(this._passengerService.passengerArray);
    this.passengerArray = this._passengerService.passengerArray
  }

}
