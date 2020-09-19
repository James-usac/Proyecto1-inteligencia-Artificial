import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';


const routes: Routes = [
  {path: "", component: InicioComponent, pathMatch: "full"},
  {path: "animal/:nombre", component: MostrarComponent},
  {path: "**", redirectTo: '/' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
