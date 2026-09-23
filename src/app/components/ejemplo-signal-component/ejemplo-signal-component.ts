import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  //NECESITAMOS UNA COPIA DE NUESTRO SERVICE SINGLETON
  //PARA ELLO, SE UTILIZA inject
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  //DECLARAMOS DOS VARIABLES QUE APUNTEN A LOS SIGNAL
  public contador = this._serviceSignal.contador;
  public dobleContador = this._serviceSignal.dobleContador();

  modificarContador(): void {
    //SIMPLEMENTE LLAMAMOS AL SERVICIO
    this._serviceSignal.modificarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
