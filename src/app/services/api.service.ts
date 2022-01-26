import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public endPoint: string = '';

  constructor() {
    this.setupEndPoint();
  }

  public setupEndPoint() {
    const metaEle: HTMLMetaElement = document.querySelector('meta[name="api-end-point"]');
    if (metaEle) {
      this.endPoint = metaEle.getAttribute('content');
    }
  }

  public getUrl(url: string): string {
    return `${this.endPoint}/${url}`;
  }
}
