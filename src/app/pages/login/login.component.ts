import { Component, OnInit } from '@angular/core';
// importamos el FormBuilder
import { FormBuilder, Validators } from '@angular/forms';
// importamos helpes/function
import { functions } from 'src/app/Helpers/functions';
import { alerts } from 'src/app/Helpers/alerts';
// import interface
import { Ilogin } from 'src/app/interface/ilogin';
// servicios
import { LoginService } from 'src/app/servicios/login.service';
// importar router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // campos email , password= creamos grupos de controles
  public f = this.form.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  // si esta activo o no
  formSubmited = false;

  constructor(private form: FormBuilder, private loginServicio: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  //===================
  // funcion del login
  //===================
  login() {
    this.formSubmited = true;
    if (this.f.invalid) {
      return;
    }
    const data: Ilogin = {
      email: this.f.controls.email.value,
      password: this.f.controls.password.value,
      returnSecureToken: true
    }
    this.loginServicio.login(data).subscribe(
      {
        next: resp => {
          this.router.navigateByUrl('/');
        },
        error: err => {

          if (err.error.error.menssage == "EMAIL_NOT_FOUND") {
            alerts.alertaBasica("Error", "Email incorrecto", "error");
          } else if (err.error.error.message == "INVALID_PASSWORD") {
            alerts.alertaBasica("error", "Contraseña Incorrecta", "error");
          } else {
            alerts.alertaBasica("error", "Error Desconocido", "error");
          }
        }
      });

  }
  invalidField(field: string) {
    return functions.invalidField(field, this.f, this.formSubmited);
  }
}
