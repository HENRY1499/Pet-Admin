import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamos el componenete
import { ProductosComponent } from './productos.component';
// importamos el routing
import { ProductosRoutingModule } from './productos-routing.module';
@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
