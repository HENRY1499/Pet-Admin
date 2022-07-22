import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// importamos el httpclient
@Injectable({
  providedIn: 'root'
})
export class RefugiosService {

  constructor(private http: HttpClient) { }

  getRefugios() {
    return this.http.get(`${environment.urlFirebase}shelters.json`);
  }
}
