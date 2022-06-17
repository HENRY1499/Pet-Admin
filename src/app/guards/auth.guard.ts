import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// importamos httpcliete
import { HttpClient } from '@angular/common/http';
// importamos enviroment
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private httpclient: HttpClient) { }
  canActivate(): Promise<boolean> {

    return new Promise(resolve => {
      //validamos que el token si existe
      if (localStorage.getItem('token') != null) {
        //validamos que el token sea real
        let body = {
          idToken: localStorage.getItem('token')

        }
        this.httpclient.post(environment.urlGetUser, body).subscribe({
          next: resp => {
            resolve(true);
          },
          error: err => {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshtoken');
            this.router.navigateByUrl('/login');
            resolve(false);
          }
        }),
          resolve(true);
      } else {
        this.router.navigateByUrl('/login');
        resolve(false);
      }

    })
  }

}
