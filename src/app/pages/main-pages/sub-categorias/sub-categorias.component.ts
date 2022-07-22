import { Component, OnInit } from '@angular/core';
// importamos las interafces
import { Isubcategoria } from 'src/app/interface/isubcategoria';
// importamos los servicios
import { SubcategoriaService } from 'src/app/servicios/subcategoria.service';
// importamos el matTableDataSource
import { MatTableDataSource } from '@angular/material/table';
// importamos enivroment
import { environment } from 'src/environments/environment';
// importamos las functions
import { functions } from 'src/app/Helpers/functions';
@Component({
  selector: 'app-sub-categorias',
  templateUrl: './sub-categorias.component.html',
  styleUrls: ['./sub-categorias.component.css']
})
export class SubCategoriasComponent implements OnInit {

  // array para los nombres de las columnas en la tabla
  displayColums: string[] = ['position', 'category', 'image', 'name', 'products_inventory', 'title_list', 'url', 'view'];
  // llamamos a las interfacez
  subCategoria: Isubcategoria[] = [];
  // llamamos a la tabla material angular
  dataSource!: MatTableDataSource<Isubcategoria>;
  // ruta para imagenes
  path = environment.urlFiles;
  // variable para tamaño de pantalla
  screenSizeSM = false;

  constructor(private subcategorieService: SubcategoriaService) { }

  ngOnInit(): void {
    this.getSubcategoria();
    // funcion para tamaño de pantalla
    if (functions.screenSize(0, 676)) {
      this.screenSizeSM = true;
    } else {
      this.screenSizeSM = false;
    }
  }
  getSubcategoria() {
    // trae los datos de la base de datos desde los servicios
    this.subcategorieService.getData().subscribe(
      {
        next: (resp: any) => {
          let position = 1;
          this.subCategoria = Object.keys(resp).map(a => ({
            id: a,
            position: position++,
            category: resp[a].category,
            image: resp[a].image,
            name: resp[a].name,
            products_inventory: resp[a].products_inventory,
            title_list: resp[a].title_list,
            url: resp[a].url,
            view: resp[a].view,
          } as Isubcategoria))
          // instanciamos datasource(MatTableSource)
          this.dataSource = new MatTableDataSource(this.subCategoria)
          console.log(this.dataSource)
        }
      }
    )
  }

}
