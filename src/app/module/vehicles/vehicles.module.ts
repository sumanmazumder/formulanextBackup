import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';



import {MatSelectModule} from '@angular/material/select';
import { VehiclesBrandComponent } from '../../module/vehicles/vehicles-brand-list/vehicles-brand.component';
import { VehiclesTypeComponent } from '../../module/vehicles/vehicles-type-list/vehicles-type.component';
import { VehiclesVariantComponent } from '../../module/vehicles/vehicles-variant-list/vehicles-variant.component';
import { VehiclesListComponent } from '../../module/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesComponent } from './vehicles.component';
import { BrandEntitiesComponent } from './brand-entities/brand-entities.component';
import { TypeEntitiesComponent } from './type-entities/type-entities.component';
import { VehicleEntitiesComponent } from './vehicle-entities/vehicle-entities.component';
import { VariantEntityComponent } from './variant-entity/variant-entity.component';




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
    CommonModule,
    VehiclesRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatIconModule
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
