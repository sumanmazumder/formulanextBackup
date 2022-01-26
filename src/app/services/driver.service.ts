import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private apiService: ApiService, 
    private http: HttpClient,
  ) { }

  driverAdd(driverFormData){
    const url = this.apiService.getUrl("Drivers");
    return this.http.post(url, driverFormData)
  }
  driverList(){
    const url = this.apiService.getUrl("Drivers");
    return this.http.get(url);
  }
}
