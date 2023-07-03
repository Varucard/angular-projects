import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';
import { Pais, PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this._fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],

    // Forma de deshabilitar una parte del formulario
    // frontera: [{value: '', disabled: true}, [Validators.required]]

    frontera: ['', [Validators.required]]
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];
  fronterasArray: string[] = [];

  // UI
  cargando: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _paisesService: PaisesService
  ) {}

  ngOnInit(): void {
    this.regiones = this._paisesService.regiones;

    // Cuando cambie le region
    /**
      this.miFormulario.get('region')?.valueChanges
        .subscribe( region => {
          console.log(region);

          this._paisesService.getPaisesPorRegion(region)
            .subscribe(paises => {
              console.log(paises);
              this.paises = paises;
            })
        });
      */

    // Codigo optimizado
    // ( _ ) Nomenclatura de que el contenido de lo que me llega no me interesa
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
          // Muestro el mensaje de carga
          this.cargando = true;

          // Deshabilitar el bloque del formulario
          // this.miFormulario.get('frontera')?.disable();
        }),
        switchMap(region => this._paisesService.getPaisesPorRegion(region))
        )
        .subscribe(paises => {
          this.paises = paises;

        // Elimino el mensaje de carga
        this.cargando = false;
      });

    // Cuando cambio el país
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
          // Habilitar el bloque del formulario
          // this.miFormulario.get('frontera')?.enable();
        }),
        switchMap(codigo => this._paisesService.getPaisPorCodigo(codigo)),
        tap((resp) => {
          if (resp !== null) {
            this.fronterasArray = resp[0].borders;
          }
        }),
        switchMap(pais => this._paisesService.getPaisesPorCodigos(this.fronterasArray))
      )
      .subscribe(paises => {
        // (pais) ? this.fronteras = pais[0]?.borders : this.fronteras = [];

        this.fronteras = paises;
        this.cargando = false;
      });

  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
