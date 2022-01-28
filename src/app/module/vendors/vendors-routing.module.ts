import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { BrokerListComponent } from './broker-list/broker-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';

import { VendorComponent } from './vendors.component';

import { UserEntityComponent } from './user-entity/user-entity.component';
import { OwnerViewComponent } from './owner-view/owner-view.component';
const routes: Routes = [
  {path: '', redirectTo: 'ownerList', pathMatch: 'full'},

  {path: 'ownerList', component: OwnerListComponent, },
  {path: 'brokerList', component: BrokerListComponent, },
  {path: 'driverList', component: DriverListComponent, },

  {path: 'userEntity', component: UserEntityComponent, },
  {path: 'ownerView', component: OwnerViewComponent, },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  // declarations: [VehicleListComponent, OwnerListComponent, BrokerListComponent, DriverListComponent],
  exports: [RouterModule],
})
export class VendorRoutingModule { }
