import { Component, OnInit } from '@angular/core';
// importamos la interface Iusers
import { Iusers } from 'src/app/interface/iusers';
// importamos el servicio
import { UsersService } from 'src/app/servicios/users.service';
// importar clase MatTableDataSource
import { MatTableDataSource } from '@angular/material/table';
// importamos el evironment donde esat el link/variable de la ruta de las imagenes
import { environment } from 'src/environments/environment';
// importamos helpers
import { functions } from 'src/app/Helpers/functions';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // variable para nombras las columnas de nuestra tabla de angular material
  displayedColumns: string[] = ['position', 'first_name', 'last_name', 'email', 'country', 'state', 'city', 'phone', 'address', 'picture'];
  // declarar variable globar que trae el tipo de usuario de Iusers, instancai
  users: Iusers[] = [];
  // varibale global que instancie la data que aparecera en la tabla
  dataSource!: MatTableDataSource<Iusers>;

  // variable que captura la ruta de las imagenes
  path = environment.urlFiles;
  // variable global para deifinir el tamaño de pantalla
  screenSizeSM = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getData();

    // funcion para determinar el tamaño de pantalla
    if (functions.screenSize(0, 676)) {
      this.screenSizeSM = true;
    } else {
      this.screenSizeSM = false
    }
  }

  // funcion para tomar la data de usuarioos
  getData() {
    this.usersService.getData().subscribe(
      {
        next: (resp: any) => {
          // Integrando respuesta de base de datos con la interfaz
          let position = 1;
          this.users = Object.keys(resp).map(a => ({
            id: a,
            position: position++,
            first_name: resp[a].first_name,
            last_name: resp[a].last_name,
            username: resp[a].username,
            email: resp[a].email,
            country: resp[a].country,
            state: resp[a].state,
            city: resp[a].city,
            phone: resp[a].phone,
            address: resp[a].address,
            picture: resp[a].picture
          } as Iusers))
          this.dataSource = new MatTableDataSource(this.users);
          console.log(this.dataSource);
        }
      }
    )
  }
}
