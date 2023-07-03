import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit{

  // TODO validaciones y mensajes de error en el Formulario
  miFormulario: FormGroup = this._fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    /**
      // Me subscribo solo a un elemento del formulario
      this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue => {
        console.log(newValue);
      })
    */

    /**
      // Me subscribo al formulario completo
      this.miFormulario.valueChanges.subscribe (form => {
        delete form.condiciones;
        this.persona = form;
      })
    */

    // Extraigo las condiciones desestructurando el Objeto
    this.miFormulario.valueChanges.subscribe (({condiciones, ...rest}) => {
      this.persona = rest;
    })
  }

  guardar() {

    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

  }

  errores(param: string): any {
    return this._vs.errores(param);
  }
}
