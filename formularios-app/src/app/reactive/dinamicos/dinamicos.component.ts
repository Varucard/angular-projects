import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  miFormulario: FormGroup = this._fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)] ],
    favoritos: this._fb.array([
      ['Guilds Wars 2', Validators.required],
      ['The Sims 4', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this._fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private _fb: FormBuilder) {}

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {

    if (this.nuevoFavorito.invalid) return

    this.favoritosArr.push(this._fb.control(this.nuevoFavorito.value, Validators.required));

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }

  }
}
