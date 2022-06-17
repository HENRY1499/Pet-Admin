import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { RefugiosComponent } from './refugios.component';


const routes: Routes = [
    {
        path: '',
        component: RefugiosComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RefugiosRoutingModule { }
