import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { AdopcionesComponent } from './adopciones.component';
// importamos el AdopcionesRouting
import { AdopcionesRoutingModule } from './adoption-routing.module';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/Pipes/pipes.module';
@NgModule({
  declarations: [AdopcionesComponent],
  imports: [
    CommonModule,
    AdopcionesRoutingModule,
    PipesModule,
    MatTableModule
  ]
})
export class AdopcionesModule { }
