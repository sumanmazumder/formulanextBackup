import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MeasurementUnitsService } from '../../../services/measurement-units.service';
import { validate } from 'json-schema';
import { LicenceClassService } from '../../../services/licence-class.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface ddd{
  className?: string,
  associatedWeight?: number,
  id?: number,
}

@Component({
  selector: 'app-licence-class-entity',
  templateUrl: './licence-class-entity.component.html',
  styleUrls: ['./licence-class-entity.component.scss']
})

export class LicenceClassEntityComponent implements OnInit {
  private isActive : boolean = true;
  public licenceClassId : any;
  public licenceClassFrom : FormGroup = new FormGroup({
    // licenceGroup : new FormGroup({
      className: new FormControl('', Validators.required),
      associatedWeight: new FormControl('',),
      meta: new FormControl('',),
      isActive: new FormControl(this.isActive,),
      // id: new FormControl(''),
    // }),
  })
  constructor(
    private licenceClassService: LicenceClassService,
    private _router: Router,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUrl();
  }
  licenceClassAdd(){
    console.log(this.licenceClassFrom.value);
    this.licenceClassService.licenceClassAdd(this.licenceClassFrom.value).subscribe(
      (success)=>{
        console.log(success);
        this._router.navigateByUrl('dashboard/master/licenceClassList');
      },(error)=>{
        console.log(error);
      }
    )
  }
  getUrl() {
    this.activeRouter.queryParams.subscribe(
      passData => {
        console.log(passData.licenceClassId);
        this.licenceClassId = passData.licenceClassId;
        this.licenceClassService.licenceClassList().subscribe(
          (res: any)=>{
            console.log(res);
           let findId = res.find( x=>{
              // console.log(x);
              // console.log(this.licenceClassId);
              return x.id == this.licenceClassId;
            });
            console.log(findId);
            this.editLicenceClass(findId);
          },(error)=>{
            console.log(error);
          }
        )
      }
    )
  }
  editLicenceClass(licenceData){
    console.log(this.licenceClassId);
    this.licenceClassFrom.patchValue({
      // className: licenceData?.className,
      // associatedWeight: licenceData?.associatedWeight,
      id: this.licenceClassId
    });
    console.log(licenceData);
    // this.licenceClassFrom.controls["className"].setValue(licenceData.className);
    // this.licenceClassFrom.controls["associatedWeight"].setValue(licenceData.associatedWeight);

  }
  licenceClassEdit(){
    let licenceId = this.licenceClassId;
    // console.log(this.licenceClassFrom.value['id'] = this.licenceClassId);
    // console.log(this.licenceClassId);

    Object.assign(this.licenceClassFrom.value, {'id': parseInt(this.licenceClassId) })
    // console.log(this.licenceClassFrom.value);
    this.licenceClassService.licenceClassEdit(licenceId, this.licenceClassFrom.value).subscribe(
      (success)=>{
        console.log(success);
        this._router.navigateByUrl('dashboard/master/licenceClassList');
      },(error)=>{
        console.log(error);

      }
    )
  }
}
