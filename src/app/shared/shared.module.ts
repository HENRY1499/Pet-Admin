import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// componentes
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// router
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    FooterComponent,
    SidebarComponent
  ],
  exports: [

    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
