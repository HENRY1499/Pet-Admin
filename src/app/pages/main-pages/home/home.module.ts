import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importamon el componenet de home
import { HomeComponent } from './home.component';
// home-routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomeModule { }
