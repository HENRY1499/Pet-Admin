import { Component, OnInit } from '@angular/core';
// importamos el router
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //funcion de salida del sistema
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshtoken');
    this.router.navigateByUrl('/login');
  }

}
