import { Component, OnInit } from '@angular/core';
import { Iadopciones } from 'src/app/interface/iadopciones';
import { AdopcionesService } from 'src/app/servicios/adopciones.service';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { functions } from 'src/app/Helpers/functions';
@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.css']
})
export class AdopcionesComponent implements OnInit {

  displayColums: string[] = ['position', 'client', 'commision', 'id_order', 'id_payment', 'payment_method', 'pets_product', 'quantity', 'total', 'unit_price'];
  adopcion: Iadopciones[] = [];
  dataSource!: MatTableDataSource<Iadopciones>;
  path = environment.urlFiles;
  screenSiseSM = false;

  constructor(private serviceAdopcion: AdopcionesService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.serviceAdopcion.getAdopciones().subscribe({
      next: (resp: any) => {
        let position = 1;
        this.adopcion = Object.keys(resp).map(a => ({
          id: a,
          position: position++,
          client: resp[a].client,
          commision: resp[a].commision,
          id_order: resp[a].id_order,
          id_payment: resp[a].id_payment,
          payment_method: resp[a].payment_method,
          pets_product: resp[a].pets_product,
          quantity: resp[a].quantity,
          total: resp[a].total,
          unit_price: resp[a].unit,
        } as Iadopciones))
        this.dataSource = new MatTableDataSource(this.adopcion);
        console.log(this.dataSource);
      }
    })
  }

}
