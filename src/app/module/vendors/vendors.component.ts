import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'vendors-root',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VendorComponent {
  title = 'Vehicle';
  
}