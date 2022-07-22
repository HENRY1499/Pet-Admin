import { Component, OnInit } from '@angular/core';
// se importa la interfaz icategories
import { ICategories } from 'src/app/interface/icategories';
// se importa los user
import { CategoriesService } from 'src/app/servicios/categories.service';
// importar clase MatTableDataSource
import { MatTableDataSource } from '@angular/material/table';
// importamos el evironment donde esat el link/variable de la ruta de las imagenes
import { environment } from 'src/environments/environment';
// importamos helpers
import { functions } from 'src/app/Helpers/functions';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  //variable para colocar los nombres de las columnas en la tabla de angular material
  displayColumns: string[] = ['position', 'name', 'icon', 'image', 'title_list', 'url', 'view'];
  categoria: ICategories[] = [];
  dataSource!: MatTableDataSource<ICategories>;
  // variable que caputa la ruta de las imagenes
  path = environment.urlFiles;
  // variable global para definir el tamaño de pantalla
  screenSizeSM = false;
  constructor(private categorieService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    // funcion para determinar el tamaño de pantalla
    if (functions.screenSize(0, 676)) {
      this.screenSizeSM = true;
    } else {
      this.screenSizeSM = false
    }
  }
  getCategories() {
    this.categorieService.getCategories().subscribe(
      {
        next: (resp: any) => {
          // integramos la respuesta de la base de datos a la interfaz
          let position = 1;
          this.categoria = Object.keys(resp).map(a => ({
            id: a,
            position: position++,
            icon: resp[a].icon,
            image: resp[a].image,
            name: resp[a].name,
            title_list: resp[a].title_list,
            url: resp[a].url,
            view: resp[a].view
          } as ICategories))
          this.dataSource = new MatTableDataSource(this.categoria);
          console.log(this.dataSource);
        }
      }
    )
  }

}
