import { Component, OnInit } from '@angular/core';
// importamos la interface Iusers
import { Iusers } from 'src/app/interface/iusers';
// importamos el servicio
import { UsersService } from 'src/app/servicios/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // declarar variable globar que trae el tipo de usuario de Iusers
  users: Iusers[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getData();
  }

  // funcion para tomar la data de usuarioos
  getData() {
    this.usersService.getData().subscribe(
      {
        next: (resp) => {
          console.log("resp", resp);
        }
      }
    )
  }
}
