import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, HostBinding, Component, OnInit, ViewChild, forwardRef, Input, Optional, Self, ChangeDetectorRef, Output , EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormArray, NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

import { MeasurementUnitsService } from '../../../services/measurement-units.service';
import { VehicleBrandService } from '../../../services/vehicle-brand.service';
import { LicenceClassService } from '../../../services/licence-class.service';
import { FocusMonitor } from '@angular/cdk/a11y';

// import { MatAutocompleteTrigger,MatFormFieldControl, MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';

// import { NgControl, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VehiclesTypeService } from '../../../services/vehicles-type.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-type-entities',
  templateUrl: './type-entities.component.html',
  styleUrls: ['./type-entities.component.scss'],
  // providers: [{ provide: MatFormFieldControl, useExisting: TypeEntitiesComponent }] 
})
export class TypeEntitiesComponent implements OnInit {

  //
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any[] = [];
  allFruits: any;
  licenceClass : any;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  

  // licenceClass = ['LMV', 'MHV', 'HMV'];
  















  public units: any;
  public vehiclesBrand: any;
  public status: boolean = true;
  // public resentValue : number = 0;
public compatibleLicenceClass1;

  public vehiclesTypeFrom: FormGroup = new FormGroup({
    model: new FormControl('',),
    capacity: new FormGroup({
      weight: new FormControl('',),
      unit: new FormControl('',),
    }),
    dimension: new FormGroup({
      Height: new FormControl('',),
      width: new FormControl('',),
      depth: new FormControl('',),
      unit: new FormControl('',),
    }),
    vehicleBrandId: new FormControl('',),
    compatibleLicenceClass : new FormControl([this.fruits]),
    // compatibleLicenceClass: new FormArray([
    //   this.compatibleLicenceClass1 = new FormControl(''),
    // ]),
    meta: new FormControl(null),
    isActive: new FormControl(this.status),
  });
  constructor(
    private measurementUnitsService: MeasurementUnitsService,
    private vehicleBrandService: VehicleBrandService,
    private licenceClassService: LicenceClassService,
    private typeEntityService : VehiclesTypeService,
    private router: Router
  ){
    //
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
    console.log(this.filteredFruits);
    
  }






    //
   










//






  ngOnInit(): void {
    this.measurementUnitList();
    this.vehiclesBrandList();
    this.licenceClassList();


  }






    //

  measurementUnitList() {
    this.measurementUnitsService.measurementUnitsList().subscribe(
      (success: any) => {
        this.units = success;
        // console.log(this.units);
        
      }
    )
  }

  vehiclesBrandList() {
    this.vehicleBrandService.brandList().subscribe(
      (success: any) => {
        // console.log(success);
        this.vehiclesBrand = success;
        // console.log(this.vehiclesBrand);
        // success.map(element => {
          
        //   
        // })
      }
    )
  }
  licenceClassList() {
    this.licenceClassService.licenceClassList().subscribe(
      (success: any) => {
        console.log(success);
        this.licenceClass = success;
        // this.allFruits = success;
        // console.log(this.allFruits, this.allFruits.slice());
        
      }
    )
  }
  









  //
  
  remove(fruit: any): void {
    const index = this.fruits.findIndex( e=> e.id === fruit.id);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    // this.fruits.push(event.option.viewValue);
    this.fruits.push({name: event.option.viewValue, id: event.option.value});
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(this.fruitInput.nativeElement.value);
    console.log(event);
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  vehiclesTypeAdd() {
    console.log(this.vehiclesTypeFrom.value);
    
    console.log(this.fruits);
    let formValue = this.vehiclesTypeFrom.value;
    formValue.compatibleLicenceClass = (this.fruits.map(
      x=>{
        return x.id
      }
    ))
    this.typeEntityService.addVehiclesType(this.vehiclesTypeFrom.value).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigateByUrl('dashboard/vehicles/vehiclesType')
      },(error)=>{
        console.log(error);
        
      }
    )
    // this.vehiclesTypeFrom.get('compatibleLicenceClass').valueChanges.subscribe(
    //   (res)=>{
    //     console.log(res);
        
    //     this.filterdatta(res);
    //   }
    // )
    // console.log(this.fruitCtrl.value);
    
  }
  // filterdatta(res){
  //   this.licenceClass = this.licenceClass.filter(item =>{
  //     return item.toLowerCase().indexOf(res.toLowerCase()) > -1
  //   })
  // }
}
