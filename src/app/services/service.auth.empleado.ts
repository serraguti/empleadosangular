import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleado {
    constructor(private _service: ServiceEmpleados){}
    //UTILIZAREMOS SIGNAL PARA REACTIVAR LOS DIBUJOS DEL 
    //COMPONENT
    //UN SIGNAL TAMBIEN PUEDE TENER VALOR NULL, NO SOLO
    //CUANDO SEA UN OBJETO, TAMBIEN CUANDO SEA UN NUMBER/STRING
    public user = signal<Empleado | null>(null);
    logInEmpleado(token: string): void {
        //ALMACENAMOS EL TOKEN
        localStorage.setItem("TOKEN", token);
        //RECUPERAMOS EL EMPLEADO QUE HA HECHO EL LOGIN
        this._service.getPerfilEmpleado().subscribe(response => {
            this.user.set(response);
        })
    }

    logOutEmpleado(): void {
        //QUITAMOS AL EMPLEADO
        this.user.set(null);
        localStorage.removeItem("TOKEN");
    }
}