import { Injectable } from '@angular/core';
// importar el HttpClient
import { HttpClient } from '@angular/common/http';
// importar environmnet
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  // Traer la data de la coleccion de usuarios en Firebase
  getData() {
    return this.http.get(`${environment.urlFirebase}users.json`);
  }
}

