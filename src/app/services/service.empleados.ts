import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";
import { environment } from "../../environments/environment.development";
import { Login } from "../models/login";
@Injectable()
export class ServiceEmpleados {
    public token: string;
    constructor(private _http: HttpClient) {
        this.token = "";
    }

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

    logInEmpleado(user: Login): Observable<any> {
        //CONVERTIMOS A JSON EL LOGIN
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        let request = "auth/login";
        let url = environment.urlApiEmpleadosSecurity + request;
        return this._http.post(url, json, {headers: header});
    }
}