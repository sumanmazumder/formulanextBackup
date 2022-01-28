import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService {

  constructor(
    private apiService: ApiService, 
    private http: HttpClient
  ) { }

  vehicleList(){
    const url = this.apiService.getUrl("Vehicles");
    return this.http.get(url);
  }
}
