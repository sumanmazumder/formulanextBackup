import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { httpInterceptorProviders } from './http-interceptors/index';
import { OwnerAddService } from './services/owner-add.service';

// material component
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// directive
import { AddClassDirective } from './directives/add-class.directive';

// components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListOfTableComponent } from './components/list-of-table/list-of-table.component';

@NgModule({
  declarations: [
    AppComponent,
    // VehicleRoutingModule, 
    NotFoundComponent, DashboardComponent, SidePanelComponent,
    AddClassDirective,
    LoginComponent,
    LoaderComponent,
    ListOfTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
  ],

  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [httpInterceptorProviders],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
