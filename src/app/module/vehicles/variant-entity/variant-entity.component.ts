import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehiclesVariantService } from '../../../services/vehicles-variant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-variant-entity',
  templateUrl: './variant-entity.component.html',
  styleUrls: ['./variant-entity.component.scss']
})
export class VariantEntityComponent implements OnInit {
  public vehiclesVariantFrom : FormGroup = new FormGroup({
    name : new FormControl('',  Validators.required),
    meta: new FormControl('',),
  });
  constructor(
    private vehiclesVariantService : VehiclesVariantService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  vehiclesVariantAdd(){
    console.log(this.vehiclesVariantFrom.value);
    this.vehiclesVariantService.vehiclesVariantAdd(this.vehiclesVariantFrom.value).subscribe(
      (success)=>{
        console.log(success);
        this._router.navigateByUrl('dashboard/vehicles/vehiclesVariant')
      },(error)=>{
        console.log(error);
        
      }
    )
  }
}
