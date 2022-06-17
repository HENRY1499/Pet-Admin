import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componente 
import { DisputesComponent } from './disputes.component';
// importamos el routing
import { DisputesRoutingModule } from './disputes-routing.module';

@NgModule({
  declarations: [DisputesComponent],
  imports: [
    CommonModule,
    DisputesRoutingModule
  ]
})
export class DisputesModule { }
