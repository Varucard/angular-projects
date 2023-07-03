import { Injectable, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, NgForm, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApelldioPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  noPuedeSerStrider (control: FormControl): ValidationErrors | null {

    const valor = control.value?.trim().toLowerCase();

    if (valor === 'strider') return {noStrider: true};

    return null;
  }

  errores(param: string): any {
    return this.miFormulario?.controls[param]?.errors;
  }

  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      // return (pass1 !== pass2) ? {noIguales: true} : null;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true});
      }

      //OJO, Si el campo tiene alguna validación extra esta forma eliminar ese error
      formGroup.get(campo2)?.setErrors(null)
      return null
    }
  }

}
