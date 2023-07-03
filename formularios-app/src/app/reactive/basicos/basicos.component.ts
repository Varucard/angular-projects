import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  /**
    miFormulario: FormGroup = new FormGroup({
      nombre: new FormControl('Mouse'),
      precio: new FormControl(1500),
      existencias: new FormControl(5)
    });
  */

  miFormulario: FormGroup = this._fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.min(0), Validators.required] ],
    existencias: [ , [Validators.min(0), Validators.required] ]
  })

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Mouse',
      precio: 100
    })
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  //TODO Implementar para "Template - Basico"
  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }

    this.miFormulario.reset();

  }
}
