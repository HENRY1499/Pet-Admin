import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './main-pages/main-pages.component';
// ROUTING
import { AppRoutingModule } from '../app-routing.module';
// // modulo shared
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './main-pages/error404/error404.component';




@NgModule({
  declarations: [
    MainPagesComponent,
    Error404Component,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule

  ]
})
export class PagesModule { }