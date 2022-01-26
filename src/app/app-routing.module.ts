import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MasterModule } from './module/master/master.module';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {path: 'dashboard', component: DashboardComponent, 
    children:[
      {path: 'vendor', loadChildren: () => import('./module/vendors/vendors.module').then(m => m.VendorModule) },
      {path: 'vehicles', loadChildren: () => import('./module/vehicles/vehicles.module').then(m => m.VendorModule) },
      {path: 'master', loadChildren: () => import('./module/master/master.module').then(m => m.MasterModule) },
    ]
},
  
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
