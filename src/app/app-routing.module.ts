import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './pages/page-routing.module';
// componentes
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
