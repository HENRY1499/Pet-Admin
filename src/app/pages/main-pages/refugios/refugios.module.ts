import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente refugio
import { RefugiosComponent } from './refugios.component';
// importamos rel routing refugios
import { RefugiosRoutingModule } from './refugios-routing.module';
@NgModule({
  declarations: [RefugiosComponent],
  imports: [
    CommonModule,
    RefugiosRoutingModule
  ]
})
export class RefugiosModule { }
