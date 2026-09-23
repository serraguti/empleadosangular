import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";
import { environment } from "../../environments/environment.development";
@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {}

    getEmpleados(): Observable<Array<Empleado>> {
        let request = "api/empleados";
        let url = environment.urlApiEmpleados + request;
        return this._http.get<Array<Empleado>>(url);
    }

    getOficios(): Observable<Array<string>> {
        let request = "api/empleados/oficios";
        let url = environment.urlApiEmpleados + request;
        return this._http.get<Array<string>>(url);
    }

    getEmpleadosOficio(oficio: string): Observable<Array<Empleado>>{
        let request = "api/empleados/empleadosoficio/" + oficio;
        let url = environment.urlApiEmpleados + request;
        console.log(url);
        return this._http.get<Array<Empleado>>(url);
    }
}