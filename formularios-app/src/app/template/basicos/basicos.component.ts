import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Mouses',
    precio: 10,
    existencia: 10
  }

  constructor(private _vs: ValidatorService) {}

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean {
    // this.miFormulario?.form.controls['precio']?.setErrors({'precio': true});

    return this.miFormulario?.form.controls['precio']?.value < 0 && this.miFormulario?.form.controls['precio']?.touched;
  }

  guardar() {
    console.log(this.miFormulario);

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencia: 0
    });

    // Validación de numeros
    // if (this.miFormulario?.form.controls['precio']?.value < 0) {
    //   return;
    // }
  }

  errors(param: string): any {
    return this._vs.errores(param);
  }
}
