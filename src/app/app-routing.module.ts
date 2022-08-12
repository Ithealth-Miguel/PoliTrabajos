import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"empleados",
    loadChildren:()=> import('./moduloPrueba/moduloprueba.module').then(m=>m.ModulopruebaModule)
  },
  {
    path:'**',
    redirectTo:'empleados'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
