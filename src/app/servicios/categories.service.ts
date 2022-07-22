import { Injectable } from '@angular/core';
// importar el HttpClient
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  // traemos la data de clientes de la base de datos de firebase
  getCategories() {
    return this.http.get(`${environment.urlFirebase}categories.json`);
  }
}
