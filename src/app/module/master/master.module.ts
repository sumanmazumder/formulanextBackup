import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master-routing.module';
import { LicenceClassListComponent } from './licence-class-list/licence-class-list.component';
import { LicenceClassEntityComponent } from './licence-class-entity/licence-class-entity.component';
import { MeasurementUnitsEntityComponent } from './measurement-units-entity/measurement-units-entity.component';
import { MeasurementUnitsListComponent } from './measurement-units-list/measurement-units-list.component';


@NgModule({
  declarations: [
    MasterComponent,
    LicenceClassListComponent,
    LicenceClassEntityComponent,
    MeasurementUnitsEntityComponent,
    MeasurementUnitsListComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule,
    // MasterComponent,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    // MasterComponent,
    LicenceClassListComponent,
    LicenceClassEntityComponent,
    MeasurementUnitsEntityComponent,
    MeasurementUnitsListComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MasterModule { }
