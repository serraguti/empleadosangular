import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleado } from '../../services/service.auth.empleado';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  public _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public _serviceAuth: ServiceAuthEmpleado = inject(ServiceAuthEmpleado);
  public contador = this._serviceSignal.contador;
  //AQUI PODEMOS RECUPERAR EL EMPLEADO QUE SE HA VALIDADO
  public empleado = this._serviceAuth.user;

  logOutEmpleado(): void{
    this._serviceAuth.logOutEmpleado();
  }
}
