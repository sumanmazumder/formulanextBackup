import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(
    private apiService: ApiService, 
    private http: HttpClient,
  ) { }

  brokerAdd(brokerFromData){
    const url = this.apiService.getUrl("Brokers");
    return this.http.post(url, brokerFromData)
  }
  brokerList(){
    const url = this.apiService.getUrl("Brokers");
    return this.http.get(url);
  }
}
