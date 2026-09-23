import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpleadosComponent } from './components/home-empleados-component/home-empleados-component';
import { EmpleadosOficioComponent } from './components/empleados-oficio-component/empleados-oficio-component';

const routes: Routes = [
  {path: "", component: HomeEmpleadosComponent},
  {path: "empleadosoficio", component: EmpleadosOficioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
