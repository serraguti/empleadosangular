
//NO VAMOS A INCLUIR EL SERVICIO DENTRO 
//DEL MODULE, DE ESA FORMA, SOLAMENTE 

import { computed, Injectable, signal } from "@angular/core";

//TENDREMOS UNA INSTANCIA PARA TODOS LOS COMPONENTS
@Injectable({providedIn: 'root'})
export class ServiceSignal{
  public contador = signal(0);

  //PODEMOS UTILIZAR METODOS COMPUTED PARA EJECUTAR ACCIONES
  //SOBRE EL signal
  public dobleContador = computed(() => {
    return this.contador() * 2;
  });

  modificarContador(): void {
    //NUEVO VALOR
    this.contador.set(99);
  }

  incrementarContador(): void {
    this.contador.update(value => value + 1);
  }    
}