import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { SubCategoriasComponent } from './sub-categorias.component';
// importamos el routing
import { SubCategoriasRoutingModule } from './sub-categorias-routing.module';
@NgModule({
  declarations: [SubCategoriasComponent],
  imports: [
    CommonModule,
    SubCategoriasRoutingModule
  ]
})
export class SubCategoriasModule { }
