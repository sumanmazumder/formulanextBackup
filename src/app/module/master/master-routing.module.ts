import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

import { MasterComponent } from './master.component';
import { LicenceClassListComponent } from './licence-class-list/licence-class-list.component';
import { LicenceClassEntityComponent } from './licence-class-entity/licence-class-entity.component';
import { MeasurementUnitsListComponent } from './measurement-units-list/measurement-units-list.component';
import { MeasurementUnitsEntityComponent } from './measurement-units-entity/measurement-units-entity.component';
const routes: Routes = [
  {path: '', redirectTo: 'licenceClassList', pathMatch: 'full'},

  {path: 'licenceClassList', component:LicenceClassListComponent, },
  {path: 'measurementUnitsList', component:MeasurementUnitsListComponent, },


  {path: 'licenceClassEntity', component:LicenceClassEntityComponent, },
  {path: 'measurementUnitsEntity', component:MeasurementUnitsEntityComponent, },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  // declarations: [VehicleListComponent, OwnerListComponent, BrokerListComponent, DriverListComponent],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
