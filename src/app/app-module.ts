import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeEmpleadosComponent } from './components/home-empleados-component/home-empleados-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { EmpleadosOficioComponent } from './components/empleados-oficio-component/empleados-oficio-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEmpleados } from './services/service.empleados';
import { LoginEmpleadoComponent } from './components/login-empleado-component/login-empleado-component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado-component/perfil-empleado-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

@NgModule({
  declarations: [
    App,
    HomeEmpleadosComponent,
    MenuComponent,
    EmpleadosOficioComponent,
    LoginEmpleadoComponent,
    PerfilEmpleadoComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceEmpleados],
  bootstrap: [App],
})
export class AppModule {}
