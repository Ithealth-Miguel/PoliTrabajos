import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaZComponent } from './components/prueba-z/prueba-z.component';

const routes: Routes = [
  {
    path:'',
    component:PruebaZComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulopruebaRoutingModule { }
