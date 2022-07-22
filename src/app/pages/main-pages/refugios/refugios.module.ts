import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importamos rel routing refugios
import { RefugiosRoutingModule } from './refugios-routing.module';

// importamos el componente refugio
import { RefugiosComponent } from './refugios.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/Pipes/pipes.module';


@NgModule({
  declarations: [RefugiosComponent],
  imports: [
    CommonModule,
    RefugiosRoutingModule,
    MatTableModule,
    PipesModule
  ]
})
export class RefugiosModule { }
