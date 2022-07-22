import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importar recuerso de material
import { MatTableModule } from '@angular/material/table';
// importamos componente users
import { UsersComponent } from './users.component';
// importamos erouting
import { UsersRoutingModule } from './users-routing.module';
// importamos pipes
import { PipesModule } from 'src/app/Pipes/pipes.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    PipesModule
  ]
})
export class UsersModule { }
