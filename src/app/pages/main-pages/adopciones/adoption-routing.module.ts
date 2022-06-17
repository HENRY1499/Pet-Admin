import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { AdopcionesComponent } from './adopciones.component';


const routes: Routes = [
    {
        path: '',
        component: AdopcionesComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdopcionesRoutingModule { }
