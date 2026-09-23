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

@NgModule({
  declarations: [App, HomeEmpleadosComponent, MenuComponent, EmpleadosOficioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()
    , provideHttpClient(), ServiceEmpleados
  ],
  bootstrap: [App],
})
export class AppModule {}
