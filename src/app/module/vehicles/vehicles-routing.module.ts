import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
import { VehiclesBrandComponent } from '../../module/vehicles/vehicles-brand-list/vehicles-brand.component';
import { VehiclesTypeComponent } from '../../module/vehicles/vehicles-type-list/vehicles-type.component';
import { VehiclesVariantComponent } from '../../module/vehicles/vehicles-variant-list/vehicles-variant.component';
import { VehiclesListComponent } from '../../module/vehicles/vehicles-list/vehicles-list.component';
import { BrandEntitiesComponent } from './brand-entities/brand-entities.component';
import { TypeEntitiesComponent } from './type-entities/type-entities.component';
import { VehicleEntitiesComponent } from './vehicle-entities/vehicle-entities.component';
import { VariantEntityComponent } from './variant-entity/variant-entity.component';

const routes: Routes = [

  {path: '', redirectTo: 'vehiclesBrand', pathMatch: 'full'},
  {path: 'vehiclesBrand', component: VehiclesBrandComponent, },
  {path: 'vehiclesType', component: VehiclesTypeComponent, },
  {path: 'vehiclesVariant', component: VehiclesVariantComponent, },
  {path: 'vehiclesList', component: VehiclesListComponent, },

  {path: 'brandEntities', component: BrandEntitiesComponent, },
  {path: 'typeEntity', component: TypeEntitiesComponent, },
  {path: 'variantEntity', component: VariantEntityComponent, },
  {path: 'vehicleEntities', component: VehicleEntitiesComponent, },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  // declarations: [VehicleListComponent, OwnerListComponent, BrokerListComponent, DriverListComponent],
  exports: [RouterModule],
})
export class VehiclesRoutingModule { }
