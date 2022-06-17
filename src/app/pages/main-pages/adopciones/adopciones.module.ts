import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { AdopcionesComponent } from './adopciones.component';
// importamos el AdopcionesRouting
import { AdopcionesRoutingModule } from './adoption-routing.module';

@NgModule({
  declarations: [AdopcionesComponent],
  imports: [
    CommonModule,
    AdopcionesRoutingModule
  ]
})
export class AdopcionesModule { }
