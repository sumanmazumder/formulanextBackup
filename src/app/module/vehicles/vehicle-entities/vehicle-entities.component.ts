


import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormArray, NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { Subject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VehiclesTypeService } from '../../../services/vehicles-type.service';
import { VehiclesVariantService } from '../../../services/vehicles-variant.service';
import { BrokerService } from '../../../services/broker.service';
import { UserEntitiesService } from '../../../services/user-entities.service';
import { LicenceClassService } from '../../../services/licence-class.service';
export interface User {
  name: string;
}
export interface User2 {
  name: string;
}
@Component({
  selector: 'app-vehicle-entities',
  templateUrl: './vehicle-entities.component.html',
  styleUrls: ['./vehicle-entities.component.scss']
})

export class VehicleEntitiesComponent implements OnInit {


  //
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any[] = [];
  allFruits: any;
  licenceClass: any;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;




  public vehicleTypeList: any;
  public vehiclesVariantListed: any;
  // public licenceClasses: any[] =[
  //   {value: '1', viewValue: 'Hero'},
  //   {value: '2', viewValue: 'Honda'},
  //   {value: '3', viewValue: 'Apachi'},
  //   {value: '4', viewValue: 'BMW'},
  //   {value: '5', viewValue: 'HATCHBACK'},
  // ];
  public ownership: any[] =[
    {value: '1', viewValue: 'Market'},
    {value: '2', viewValue: 'Owned '},
  ];
  public brokers: any;

  // ownerId = new FormControl();
  ownerId = new FormControl();
  ownerOptions: User[] = [{name: 'Williams'}, {name: 'Johnson'}, {name: 'Brown'}];
  filteredOwnerOptions: Observable<User[]>;

  brokerId = new FormControl();
  brokerOptions: User2[] = [{name: 'Jones'}, {name: 'Smith'}, {name: 'Brown'}];
  filteredBrokerOptions: Observable<User2[]>;

  public vehiclesFrom : FormGroup = new FormGroup({
    vehicleTypeId : new FormControl('',  Validators.required),
    vehicleVariantId : new FormControl('',  Validators.required),
    licenceClasses : new FormControl('',  Validators.required),
    // licenceClasses : new FormArray([]),
    ownership : new FormControl('',  Validators.required),
    ownerId : new FormControl('',  Validators.required),
    brokerId : new FormControl('',  Validators.required),
    chassisNo : new FormControl('',  Validators.required),
    engineNo : new FormControl('',  Validators.required),
    plateNo : new FormControl('',  Validators.required),
    rcNo : new FormControl('',  Validators.required),
    rcExpiry : new FormControl('',  Validators.required),
    registrationDate : new FormControl('',  Validators.required),
    vehicleAge : new FormControl('',  Validators.required),
    fitnessExpiry : new FormControl('',  Validators.required),
    insuranceExpiry : new FormControl('',  Validators.required),
    taxExpiry : new FormControl('',  Validators.required),
    puccExpiry : new FormControl('',  Validators.required),
    nationalPermitNo : new FormControl('',  Validators.required),
    nationalPermitExpiry : new FormControl('',  Validators.required),
    brokers : new FormControl('',  Validators.required),
    
    meta: new FormControl('',),
  });

  constructor(
    private vehiclesTypeService : VehiclesTypeService,
    private vehiclesVariantService : VehiclesVariantService,
    private brokerServices: BrokerService,
    private userEntitiesService : UserEntitiesService,
    private licenceClassService: LicenceClassService
  ) {

    //
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter3(fruit) : this.allFruits.slice())),
    );
    console.log(this.filteredFruits);


   }

  ngOnInit(): void {
    this.filteredOwnerOptions = this.ownerId.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.ownerOptions.slice())),
    );

    this.filteredBrokerOptions = this.brokerId.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter2(name) : this.brokerOptions.slice())),
    );

    this.vehicleType();
    this.vehiclesVariantList();
    this.brokerList();
    this.licenceClassList();
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  displayFn2(user: User2): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.ownerOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  private _filter2(name: string): User2[] {
    const filterValue = name.toLowerCase();
    return this.brokerOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  vehiclesFromAdd(){

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
    this.fruits.push({name: event.option.viewValue, id: event.option.value});
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(this.fruitInput.nativeElement.value);
    console.log(event);
  }
  private _filter3(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }



  vehicleType(){
    this.vehiclesTypeService.VehiclesTypeList().subscribe(
      (res)=>{
        console.log(res);
        this.vehicleTypeList = res;
      }
    )
  }
  
  vehiclesVariantList(){
    this.vehiclesVariantService.vehiclesVariantList().subscribe(
      (res)=>{
        console.log(res);
        this.vehiclesVariantListed = res;
      }
    )
  }
  brokerList(){
    this.brokerServices.brokerList().subscribe(
      (res:any)=>{
       console.log(res);
       
        res.forEach(element => {
          console.log(element.userEntityId);
          this.userEntitiesService.getUserData(element.userEntityId).subscribe(
            (res)=>{console.log(res);
            },(error)=>{console.log(error);
            }
          )
        });
      }
    )
  }
}
