import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MeasurementUnitsService } from '../../../services/measurement-units.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-measurement-units-entity',
  templateUrl: './measurement-units-entity.component.html',
  styleUrls: ['./measurement-units-entity.component.scss']
})
export class MeasurementUnitsEntityComponent implements OnInit {

  public measurementUnitFrom : FormGroup = new FormGroup({
    unit: new FormControl('', Validators.required),
    meta: new FormControl('',),
  });
  public measurementId: any;
  constructor(
    private measurementUnitsService : MeasurementUnitsService,
    private _router: Router,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUrl();
  }
  measurementUnitAdd(){
    console.log(this.measurementUnitFrom.value);
    
    this.measurementUnitsService.measurementUnitsAdd(this.measurementUnitFrom.value).subscribe(
      (success:any)=>{
        console.log(success);
        this._router.navigateByUrl('dashboard/master/measurementUnitsList');
      },(error)=>{
        console.log(error);
      }
    )
  }

  getUrl(){
    this.activeRouter.queryParams.subscribe(
      (passdata)=>{
        console.log(passdata.measurementId);
        this.measurementId = passdata.measurementId;
        this.measurementUnitsService.measurementUnitsList().subscribe(
          (success: any)=>{
            let findData = success.find(x=>{
              return x.id == this.measurementId;
            });
            console.log(findData);
            this.setMesurementUnit(findData)
          },(error)=>{
            console.log(error);
          }
        )
      }
    )
  }
  setMesurementUnit(findData){
    this.measurementUnitFrom.patchValue({
      unit: findData?.unit,
      id: this.measurementId
    })
  }
  editMeasurementUnit(){
    Object.assign(this.measurementUnitFrom.value, {'id': parseInt(this.measurementId) });
    console.log(this.measurementUnitFrom.value);
    
    this.measurementUnitsService.measurementUnitsEdit(this.measurementId, this.measurementUnitFrom.value).subscribe(
      (success)=>{
        console.log(success);
        this._router.navigateByUrl('dashboard/master/measurementUnitsList');
      },(error)=>{
        console.log(error);
      }
    )
  }
}
