import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpleadosComponent } from './components/home-empleados-component/home-empleados-component';
import { EmpleadosOficioComponent } from './components/empleados-oficio-component/empleados-oficio-component';
import { LoginEmpleadoComponent } from './components/login-empleado-component/login-empleado-component';

const routes: Routes = [
  {path: "", component: HomeEmpleadosComponent},
  {path: "empleadosoficio", component: EmpleadosOficioComponent},
  {path: "login", component: LoginEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
