import { Injectable } from '@angular/core';
// importar HttpClient
import { HttpClient } from '@angular/common/http';
// importar enviroment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${environment.urlFirebase}sub-categories.json`)
  }
}
