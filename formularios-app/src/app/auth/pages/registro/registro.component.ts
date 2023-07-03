import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { emailPattern, noPuedeSerStrider, nombreApelldioPattern } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._vs.nombreApelldioPattern)]],
    email: ['', [Validators.required, Validators.pattern(this._vs.emailPattern)], [this._emailValidator]],
    username: ['', [Validators.required, this._vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this._vs.camposIguales('password', 'password2')]
  })

  // emailErrorMsg: string = '';

  get emailErrorMsg (): string {
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingreso no tiene formato de correo electronico';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado'
    }

    return '';
  }

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService,
    private _emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Mercedes Caliva',
      email: 'test1@test.com',
      username: 'OnlyVaruCard',
      password: 123456,
      password2: 123456
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

  errores(param: string) {
    return this._vs.errores(param);
  }

  /**
    emailRequired() {
      return this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched;
    }

    emailFormato() {
      return this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched;
    }

    emailTomado() {
      return this.miFormulario.get('email')?.errors?.['emailTomado'] && this.miFormulario.get('email')?.touched;
    }
  */
}
