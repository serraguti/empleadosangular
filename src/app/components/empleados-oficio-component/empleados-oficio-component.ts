import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-empleados-oficio-component',
  standalone: false,
  styleUrl: './empleados-oficio-component.css',
  templateUrl: './empleados-oficio-component.html',
})
export class EmpleadosOficioComponent implements OnInit {
  public oficios!: Array<string>;
  public empleados!: Array<Empleado>;
  @ViewChild("selectoficio") selectOficio!: ElementRef;
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}
  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;
      this._cdr.detectChanges();
    })
  }

  showEmpleados(): void{
    let oficio = this.selectOficio.nativeElement.value;
    //console.log(oficio);
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
      //console.log(response);
      this._cdr.detectChanges();
    })
  }
}
