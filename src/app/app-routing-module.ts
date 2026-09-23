import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpleadosComponent } from './components/home-empleados-component/home-empleados-component';
import { EmpleadosOficioComponent } from './components/empleados-oficio-component/empleados-oficio-component';
import { LoginEmpleadoComponent } from './components/login-empleado-component/login-empleado-component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado-component/perfil-empleado-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  {path: "", component: HomeEmpleadosComponent},
  {path: "empleadosoficio", component: EmpleadosOficioComponent},
  {path: "login", component: LoginEmpleadoComponent},
  {path: "perfil", component: PerfilEmpleadoComponent},
  {path: "subordinados", component: SubordinadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
