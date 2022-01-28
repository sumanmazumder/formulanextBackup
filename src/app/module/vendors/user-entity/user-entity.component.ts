import { Component, OnInit } from '@angular/core';
import { OwnerAddService } from '../../../services/owner-add.service';
import { OwnerInterface } from '../../../interface/owner';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserEntitiesService } from '../../../services/user-entities.service';

// import { Observable } from 'rxjs-compat/observable';
// import {Observable} from 'rxjs';
// import 'rxjs/add/operator/flatMap';
// import 'rxjs/add/operator/map';
import { map, flatMap, mergeMap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { PostUserEntityManagerService } from '../../../services/post-user-entity-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../../services/broker.service';
import { DriverService } from '../../../services/driver.service';
import { LicenceClassService } from '../../../services/licence-class.service';
// import 'rxjs/add/operator/mergeMap';
// import { map, filter, mergeMap } from "rxjs/operators";


@Component({
  selector: 'app-user-entity',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.scss']
})
export class UserEntityComponent implements OnInit {
  public ownerData: OwnerInterface;
  public isCompany: boolean = true;
  public isActive: boolean = true;
  // public userEntatityId: number;
  public param: any;
  public ownerObj: any = {};
  public brokerObj: any = {};
  public driverObj: any = {};
  private userEntityId: number;
  public licenceClassListed: any;

  public accountType: any[] = [
    { value: 'saving', viewValue: 'Saving' },
    { value: 'Salary account', viewValue: 'Salary account' },
    { value: 'Fixed deposit account', viewValue: 'Fixed deposit account' },
    { value: 'Recurring deposit account', viewValue: 'Recurring deposit account' },
    { value: 'NRI accounts', viewValue: 'NRI accounts' },
  ];
  public urlData: any;


  // Ownwr and Broker from group
  public ownerFrom: FormGroup = new FormGroup({
    UserEntity: new FormGroup({
      fullName: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      aadhaar: new FormControl('', Validators.required),
      isCompany: new FormControl(this.isCompany),
      createdBy: new FormControl('Sushanta', ),
      updatedBy: new FormControl('Sushanta', ),
      notes: new FormControl('test', ),
      isActive: new FormControl(this.isActive),

      contact: new FormGroup({
        primary: new FormGroup({
          contactPersonName: new FormControl('', Validators.required),
          email: new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
          ]),
          contactNo: new FormControl('', [
            Validators.required,
            // Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
            Validators.min(1000000000), Validators.max(99999999999)
          ]),
          whatappNo: new FormControl('', [Validators.required,
          Validators.min(1000000000), Validators.max(99999999999)
          ]),
        }),
      }),
      company: new FormGroup({
        primary: new FormGroup({
          companyName: new FormControl('', Validators.required),
        }),
      }),
      address: new FormGroup({
        primary: new FormGroup({
          streetNo: new FormControl('', Validators.required),
          streetName: new FormControl('', Validators.required),
          landmark: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          zipCode: new FormControl('', Validators.required),
        }),
      }),
      media: new FormGroup({
        primary: new FormGroup({
          media: new FormControl(''),
        }),
      }),
      document: new FormGroup({
        primary: new FormGroup({
          document: new FormControl(''),
        }),
      }),
      bankDetail: new FormGroup({
        primary: new FormGroup({
          accountHolderName: new FormControl('', Validators.required),
          nickName: new FormControl('', Validators.required),
          bankName: new FormControl('', Validators.required),
          IFSCCode: new FormControl('', Validators.required),
          accountNumber: new FormControl('', Validators.required),
          accountType: new FormControl('', Validators.required),
          UPIId: new FormControl('', Validators.required),
        }),
      }),
      meta: new FormGroup({
        primary: new FormGroup({
          meta: new FormControl(''),
        }),
      }),
      tags: new FormControl([]),
    }),

  });

  // Driver form Group
  public driverFrom: FormGroup = new FormGroup({
    UserEntity: new FormGroup({
      fullName: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      aadhaar: new FormControl('', Validators.required),
      isCompany: new FormControl(this.isCompany),
      createdBy: new FormControl('Sushanta', ),
      updatedBy: new FormControl('Sushanta', ),
      notes: new FormControl('test', ),
      isActive: new FormControl(this.isActive),

      contact: new FormGroup({
        primary: new FormGroup({
          contactPersonName: new FormControl('', Validators.required),
          email: new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
          ]),
          contactNo: new FormControl('', [
            Validators.required,
            // Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
            Validators.min(1000000000), Validators.max(99999999999)
          ]),
          whatappNo: new FormControl('', [Validators.required,
          Validators.min(1000000000), Validators.max(99999999999)
          ]),
        }),
      }),
      company: new FormGroup({
        primary: new FormGroup({
          companyName: new FormControl('', Validators.required),
        }),
      }),
      address: new FormGroup({
        primary: new FormGroup({
          streetNo: new FormControl('', Validators.required),
          streetName: new FormControl('', Validators.required),
          landmark: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          zipCode: new FormControl('', Validators.required),
        }),
      }),
      media: new FormGroup({
        primary: new FormGroup({
          media: new FormControl(''),
        }),
      }),
      document: new FormGroup({
        primary: new FormGroup({
          document: new FormControl(''),
        }),
      }),
      bankDetail: new FormGroup({
        primary: new FormGroup({
          accountHolderName: new FormControl('',),
          nickName: new FormControl('',),
          bankName: new FormControl('',),
          IFSCCode: new FormControl('',),
          accountNumber: new FormControl('',),
          accountType: new FormControl('',),
          UPIId: new FormControl('',),
        }),
      }),
      meta: new FormGroup({
        primary: new FormGroup({
          meta: new FormControl(''),
        }),
      }),
      tags: new FormControl([]),
      licenceNo: new FormControl(),
      licenceExpiry: new FormControl(),
      licenceClasses: new FormControl([]),
    }),

  });

  constructor(
    private ownerService: OwnerAddService,
    // public flatMap : flatMap,
    private formBuilder: FormBuilder,
    private Userentitieseervice: UserEntitiesService,
    private postUserEntityMamager: PostUserEntityManagerService,
    private _router: Router,
    private activeRouter: ActivatedRoute,
    private brokerService: BrokerService,
    private driverService: DriverService,
    private licenceClassService: LicenceClassService,
  ) {
    // console.log(this.ownerData);
  }

  ngOnInit(): void {
    this.getUrl()
    this.licenceClassList();
  }
  // get f() {return this.ownerFrom.controls}
  // userEmtitiesData() {
  //   console.log(this.ownerFrom.value);
  //   this.service.userEntities(this.ownerData.userEntity).subscribe(
  //     (success) => {
  //       console.log(success)
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }
  // saveOwnerAdd() {
  //   console.log(this.ownerFrom.value.UserEntity);
  //   this.service.userEntities(this.ownerFrom.value.UserEntity).subscribe(
  //     (success) => {
  //       console.log(success);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }
  getUrl() {
    this.activeRouter.queryParams.subscribe(
      passData => {
        console.log(passData.brokerAdd);
        this.urlData = passData.brokerAdd;
      }
    )
  }
  licenceClassList(){
    this.licenceClassService.licenceClassList().subscribe(
      (res)=>{
        console.log(res);
        this.licenceClassListed = res;
      }
    )
  }
  saveOwnerAdd() {

    // switch(this.urlData == true){
      // case this.urlData == 'owner' :
      if(this.urlData == 'owner'){

      
      console.log("Owner");
      this.Userentitieseervice.userEntities(this.ownerFrom.value.UserEntity).pipe(
        map(resp => {
          this.param = resp;
          console.log(this.param.id);
          const currentData = new Date();
          this.ownerObj = {
            businessName: this.param.company.primary.companyName,
            userEntityId: this.param.id,
            media: {
              primary: {
                media: this.param.media.primary.media,
              }
            },
            createdDate: this.param.createdDate,
            updatedDate: currentData,
            meta: {
              primary: {
                meta: this.param.meta.primary.meta,
              }
            },
            notes: this.param.notes,
            isActive: this.isActive,
            tags: [],
          }
          return resp;
        }),
        flatMap(param => {
          console.log(param)
          return this.ownerService.ownerAdd(this.ownerObj).pipe(
            map(resp => {
              return resp;
            })
          )
        })
      ).subscribe(
        (resp) => {
          console.log(resp);
          // this.postUserEntityMamager.sendMessageObj({ Message: "UECreated", UE_id: 'resp.id', caller: this.Userentitieseervice.getCaller('owner') })
          this._router.navigateByUrl('dashboard/vendor/ownerList');
        },
        (error) => {
          console.log(error);
        }
      )
    }
      // break;



      // case this.urlData == 'broker' :
      else if(this.urlData == 'broker'){

      
        console.log("Broker");
        this.Userentitieseervice.userEntities(this.ownerFrom.value.UserEntity).pipe(
          map(resp => {
            this.param = resp;
            console.log(this.param.id);
            const currentData = new Date();
            this.brokerObj = {
              businessName: this.param.company.primary.companyName,
              userEntityId: this.param.id,
              media: {
                primary: {
                  media: this.param.media.primary.media,
                }
              },
              createdDate: this.param.createdDate,
              updatedDate: currentData,
              meta: {
                primary: {
                  meta: this.param.meta.primary.meta,
                }
              },
              notes: this.param.notes,
              isActive: this.isActive,
              tags: [],
            }
            return resp;
          }),
          flatMap(param => {
            console.log(param)
            return this.brokerService.brokerAdd(this.brokerObj).pipe(
              map(resp => {
                return resp;
              })
            )
          })
        ).subscribe(
          (resp) => {
            console.log(resp);
            // this.postUserEntityMamager.sendMessageObj({ Message: "UECreated", UE_id: 'resp.id', caller: this.Userentitieseervice.getCaller('owner') })
            this._router.navigateByUrl('dashboard/vendor/brokerList');
          },
          (error) => {
            console.log(error);
          }
        )
      // break;
    }

      // case this.urlData == 'driver' :
      else if(this.urlData == 'driver'){
        
      
      console.log("Driver");
        this.Userentitieseervice.userEntities(this.driverFrom.value.UserEntity).pipe(
          map(resp => {
            this.param = resp;
            console.log(this.param.id);
            const currentData = new Date();
            this.driverObj = {
              businessName: this.param.company.primary.companyName,
              userEntityId: this.param.id,
              media: {
                primary: {
                  media: this.param.media.primary.media,
                }
              },
              createdDate: this.param.createdDate,
              updatedDate: currentData,
              meta: {
                primary: {
                  meta: this.param.meta.primary.meta,
                }
              },
              notes: this.param.notes,
              isActive: this.isActive,
              tags: [],
            }
            return resp;
          }),
          flatMap(param => {
            console.log(param)
            return this.driverService.driverAdd(this.driverObj).pipe(
              map(resp => {
                return resp;
              })
            )
          })
        ).subscribe(
          (resp) => {
            console.log(resp);
            // this.postUserEntityMamager.sendMessageObj({ Message: "UECreated", UE_id: 'resp.id', caller: this.Userentitieseervice.getCaller('owner') })
            this._router.navigateByUrl('dashboard/vendor/driverList');
          },
          (error) => {
            console.log(error);
          }
        )
      }
    // }
    // switch case end
    











    

  }
}

