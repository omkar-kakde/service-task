import { Component, OnInit } from '@angular/core';
import { PassengerService } from './shared/services/passenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  title = 'services';

  constructor(private _passengerService : PassengerService){
    
  console.log(this._passengerService.passengerArray);
  
  }
  ngOnInit(): void {
     
  }
 
}
