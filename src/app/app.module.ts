import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { httpInterceptorProviders } from './http-interceptors/index';


// directive
import { AddClassDirective } from './directives/add-class.directive';

// components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';

// import { ListOfTableComponent } from './components/list-of-table/list-of-table.component';
import { localModule } from './module/common/local.module';
@NgModule({
  declarations: [
    AppComponent,
    // VehicleRoutingModule, 
    NotFoundComponent, DashboardComponent, SidePanelComponent,
    AddClassDirective,
    LoginComponent,
    LoaderComponent,
    // ListOfTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    localModule,
  ],

  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [httpInterceptorProviders],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
