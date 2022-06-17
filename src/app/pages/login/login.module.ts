import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importar reactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
// importamos la routing login
import { LoginRoutingModule } from './login-routing.module';
// importamos el component
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
