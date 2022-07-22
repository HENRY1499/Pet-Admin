import { Component, OnInit } from '@angular/core';
import { Irefugios } from 'src/app/interface/irefugios';
import { RefugiosService } from 'src/app/servicios/refugios.service';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { functions } from 'src/app/Helpers/functions';
@Component({
  selector: 'app-refugios',
  templateUrl: './refugios.component.html',
  styleUrls: ['./refugios.component.css']
})
export class RefugiosComponent implements OnInit {

  displayColumns: string[] = ['position', 'about', 'abstract', 'address', 'cover', 'email', ' logo', 'pets', 'phone', 'shelter', 'social', 'username']
  refugios: Irefugios[] = [];
  dataSource!: MatTableDataSource<Irefugios>;
  path = environment.urlFiles;
  screenSizeSM = false;

  constructor(private service: RefugiosService) { }

  ngOnInit(): void {
    this.getData();
    // funcion para determinar el tamaño de pantalla
    if (functions.screenSize(0, 676)) {
      this.screenSizeSM = true;
    } else {
      this.screenSizeSM = false
    }
  }
  getData() {
    this.service.getRefugios().subscribe({
      next: (resp: any) => {
        let position = 1;
        this.refugios = Object.keys(resp).map(a => ({
          id: a,
          position: position++,
          about: resp[a].about,
          abstract: resp[a].abstract,
          address: resp[a].address,
          cover: resp[a].cover,
          email: resp[a].email,
          logo: resp[a].logo,
          pets: resp[a].pets,
          phone: resp[a].phone,
          shelter: resp[a].shelter,
          social: resp[a].social,
          username: resp[a].username

        } as Irefugios))
        this.dataSource = new MatTableDataSource(this.refugios);
        console.log(this.dataSource);
      }
    })
  }
}
