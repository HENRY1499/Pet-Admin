import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos componente users
import { UsersComponent } from './users.component';
// importamos erouting
import { UsersRoutingModule } from './users-routing.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
