import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulopruebaRoutingModule } from './moduloprueba-routing.module';
import { PruebaZComponent } from './components/prueba-z/prueba-z.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PruebaZComponent
  ],
  imports: [
    CommonModule,
    ModulopruebaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModulopruebaModule { }
