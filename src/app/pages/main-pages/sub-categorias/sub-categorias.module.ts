import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { SubCategoriasComponent } from './sub-categorias.component';
// importamos el routing
import { SubCategoriasRoutingModule } from './sub-categorias-routing.module';
// importamos MatTableModule
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SubCategoriasComponent],
  imports: [
    CommonModule,
    SubCategoriasRoutingModule,
    MatTableModule
  ]
})
export class SubCategoriasModule { }
