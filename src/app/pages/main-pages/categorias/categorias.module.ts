import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importacion recursos de material
import { MatTableModule } from '@angular/material/table';
// importamos el componente
import { CategoriasComponent } from './categorias.component';
// importamos el CategoriaRoutingModule
import { CategoriasRoutingModule } from './categorias-routing.module';
// importamos pipes
import { PipesModule } from 'src/app/Pipes/pipes.module';
@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MatTableModule,
    PipesModule
  ]
})
export class CategoriasModule { }
