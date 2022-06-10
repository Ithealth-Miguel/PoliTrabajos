import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"semiSenior",
    loadChildren:()=> import('./moduloPrueba/moduloprueba.module').then(m=>m.ModulopruebaModule)
  },
  {
    path:'**',
    redirectTo:'semiSenior'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
