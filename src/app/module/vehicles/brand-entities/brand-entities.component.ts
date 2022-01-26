import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VehicleBrandService } from '../../../services/vehicle-brand.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-entities',
  templateUrl: './brand-entities.component.html',
  styleUrls: ['./brand-entities.component.scss']
})
export class BrandEntitiesComponent implements OnInit {

  public brandFrom:  FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      meta: new FormControl(null),
  });
  constructor(
    private vehicleBrandService: VehicleBrandService,
    private _router: Router
  ) { 
    
  }

  ngOnInit(): void {
  }
  saveBrandAdd(){
    console.log(this.brandFrom.value);
    this.vehicleBrandService.brandAdd(this.brandFrom.value).subscribe(
      (success)=>{
        console.log(success);
        this._router.navigateByUrl('/dashboard/vehicles/vehiclesBrand')
      },(error)=>{
        console.log(error);
      }
    )
  }

}
