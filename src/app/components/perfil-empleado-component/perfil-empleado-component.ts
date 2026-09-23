import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-empleado-component',
  standalone: false,
  styleUrl: './perfil-empleado-component.css',
  templateUrl: './perfil-empleado-component.html',
})
export class PerfilEmpleadoComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._service.getPerfilEmpleado().subscribe(response => {
        console.log(response);
        this.empleado = response;
        this._cdr.detectChanges();
      })    
  }
}
