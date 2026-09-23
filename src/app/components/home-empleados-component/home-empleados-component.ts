import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-home-empleados-component',
  standalone: false,
  styleUrl: './home-empleados-component.css',
  templateUrl: './home-empleados-component.html',
})
export class HomeEmpleadosComponent implements OnInit {
  public empleados!: Array<Empleado>;
  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
      this._cdr.detectChanges();
    })
  }
}
