import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  /** Solucion pasada a Servicio
    // Solución de los comentarios para los mensajes de errores - Vincula el formulario al del Front
    @ViewChild('miFormulario') miFormulario!: NgForm;

    // Solución de los comentarios para los mensajes de errores
    errores(param: string): any {
      return this.miFormulario?.controls[param]?.errors;
    }
  */

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones:boolean = false;

  constructor(private _vs: ValidatorService) {}

  errores(param: string): any {
    return this._vs.errores(param);
  }
}
