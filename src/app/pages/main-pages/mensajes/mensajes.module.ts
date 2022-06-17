import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente
import { MensajesComponent } from './mensajes.component';
// importamos el routing de mensajes
import { MensajesRoutingModule } from './mensajes-routing.module';

@NgModule({
  declarations: [MensajesComponent],
  imports: [
    CommonModule,
    MensajesRoutingModule
  ]
})
export class MensajesModule { }
