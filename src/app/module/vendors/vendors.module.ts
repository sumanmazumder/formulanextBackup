import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { BrokerListComponent } from './broker-list/broker-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { VendorRoutingModule } from './vendors-routing.module';
import { UserEntityComponent } from './user-entity/user-entity.component';
import { VendorComponent } from './vendors.component'
import { OwnerViewComponent } from './owner-view/owner-view.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    OwnerListComponent,
    BrokerListComponent,
    DriverListComponent,
    VendorComponent,
    UserEntityComponent,
    OwnerViewComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
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
