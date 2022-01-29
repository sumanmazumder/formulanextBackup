import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';

import { VehiclesBrandComponent } from '../../module/vehicles/vehicles-brand-list/vehicles-brand.component';
import { VehiclesTypeComponent } from '../../module/vehicles/vehicles-type-list/vehicles-type.component';
import { VehiclesVariantComponent } from '../../module/vehicles/vehicles-variant-list/vehicles-variant.component';
import { VehiclesListComponent } from '../../module/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesComponent } from './vehicles.component';
import { BrandEntitiesComponent } from './brand-entities/brand-entities.component';
import { TypeEntitiesComponent } from './type-entities/type-entities.component';
import { VehicleEntitiesComponent } from './vehicle-entities/vehicle-entities.component';
import { VariantEntityComponent } from './variant-entity/variant-entity.component';
import { localModule } from '../common/local.module';

@NgModule({
  declarations: [
    VehiclesBrandComponent,
    VehiclesTypeComponent,
    VehiclesVariantComponent,
    VehiclesListComponent,
    VehiclesComponent,
    BrandEntitiesComponent,
    TypeEntitiesComponent,
    VehicleEntitiesComponent,
    VariantEntityComponent,
  ],
  imports: [
    VehiclesRoutingModule,
    localModule
  ],
  exports: [
    VehiclesRoutingModule,
    VehiclesBrandComponent,
    VehiclesTypeComponent,
    VehiclesVariantComponent,
    VehiclesListComponent,
    VehiclesComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VendorModule { }
