import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'Vehicles-app',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclesComponent {
  title = 'Vehicle';
  cardValue: any = {
    options: []
  };

  selectOptions: Array<string> = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ];

  selectChange = (event: any) => {
    const key: string = event.key;
    this.cardValue[key] = [ ...event.data ];

    console.log(this.cardValue);
  };
}