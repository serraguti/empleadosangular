import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';
import { ServiceAuthEmpleado } from '../../services/service.auth.empleado';

@Component({
  selector: 'app-login-empleado-component',
  standalone: false,
  styleUrl: './login-empleado-component.css',
  templateUrl: './login-empleado-component.html',
})
export class LoginEmpleadoComponent {
  //RECUPERAMOS EL SERVICIO
  private _serviceAuth: ServiceAuthEmpleado = inject(ServiceAuthEmpleado);
  @ViewChild("cajausername") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  public mensaje!: string;

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef
  ) {}

  validarEmpleado(): void{
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);
    this._service.logInEmpleado(login).subscribe({
      next: (response) => {
        //CAPTURAMOS EL TOKEN MEDIANTE SU KEY response
        this.mensaje = response.response;
        this._serviceAuth.logInEmpleado(response.response);
        this._cdr.detectChanges();
      },
      error: (error) => {
        this.mensaje = error.message;
        this._cdr.detectChanges();
      }
    });
  }
}
