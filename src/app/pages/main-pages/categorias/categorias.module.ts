import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { CategoriasComponent } from './categorias.component';
// importamos el CategoriaRoutingModule
import { CategoriasRoutingModule } from './categorias-routing.module';
@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
