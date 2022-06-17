import { Component, OnInit } from '@angular/core';
// importamos la interface Iusers
import { Iusers } from 'src/app/interface/iusers';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // declarar variable Iusers
  users: Iusers[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }

}
