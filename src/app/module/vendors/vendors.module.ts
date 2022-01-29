import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { BrokerListComponent } from './broker-list/broker-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { VendorRoutingModule } from './vendors-routing.module';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { VendorComponent } from './vendors.component'
import { OwnerViewComponent } from './owner-view/owner-view.component';

import { UserEntityDocumentComponent } from './user-entity-document/user-entity-document.component';
import { localModule } from '../common/local.module';

@NgModule({
  declarations: [
    OwnerListComponent,
    BrokerListComponent,
    DriverListComponent,
    VendorComponent,
    UserEntityComponent,
    OwnerViewComponent,
    UserEntityDocumentComponent
  ],
  imports: [
   
    localModule
  ],
  exports: [
    OwnerListComponent,
    BrokerListComponent,
    DriverListComponent,
    VendorRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VendorModule { }
