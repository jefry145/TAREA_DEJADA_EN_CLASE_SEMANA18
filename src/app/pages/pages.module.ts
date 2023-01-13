import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from '../app.routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
