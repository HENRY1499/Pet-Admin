import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { MainPagesComponent } from './main-pages/main-pages.component';
import { Error404Component } from './main-pages/error404/error404.component';
// importar guards/auth
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./login/login.module').then(module => module.LoginModule) },
    {
        path: '',
        component: MainPagesComponent, canActivate: [AuthGuard],
        children: [
            { path: '', loadChildren: () => import('./main-pages/home/home.module').then(module => module.HomeModule) },
            { path: 'users', loadChildren: () => import('./main-pages/users/users.module').then(module => module.UsersModule) },
            { path: 'categorias', loadChildren: () => import('./main-pages/categorias/categorias.module').then(module => module.CategoriasModule) },
            { path: 'sub-categorias', loadChildren: () => import('./main-pages/sub-categorias/sub-categorias.module').then(module => module.SubCategoriasModule) },
            { path: 'adopcion', loadChildren: () => import('./main-pages/adopciones/adopciones.module').then(module => module.AdopcionesModule) },
            { path: 'refugios', loadChildren: () => import('./main-pages/refugios/refugios.module').then(module => module.RefugiosModule) },
            { path: 'ordenes', loadChildren: () => import('./main-pages/productos/productos.module').then(module => module.ProductosModule) },
            { path: 'productos', loadChildren: () => import('./main-pages/productos/productos.module').then(module => module.ProductosModule) },
            { path: 'disputes', loadChildren: () => import('./main-pages/disputes/disputes.module').then(module => module.DisputesModule) },
            { path: 'mensaje', loadChildren: () => import('./main-pages/mensajes/mensajes.module').then(module => module.MensajesModule) },
            { path: '**', component: Error404Component },
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
