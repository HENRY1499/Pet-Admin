import { Injectable } from '@angular/core';
import { Ilogin } from '../interface/ilogin';
// importar clase httpclient
import { HttpClient } from '@angular/common/http';
// importar enviroment
import { environment } from 'src/environments/environment';
// import map
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(data: Ilogin) {
    return this.http.post(environment.urlLogin, data).pipe(
      map((resp: any) => {
        localStorage.setItem('token', resp.idToken);
        localStorage.setItem('refreshtoken', resp.refreshToken);

      })
    );
  }
}
