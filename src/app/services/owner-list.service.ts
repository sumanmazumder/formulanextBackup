import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerListService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ownerList(){
    const url = this.apiService.getUrl("Owners");
    return this.http.get(url);
  }
  ownerDelete(id){
    const url = this.apiService.getUrl(`Owners/${id}`);
    return this.http.delete(url);
  }
}
