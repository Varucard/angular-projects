import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Cristian';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.' // El numeral transmite el valor del indice
  };

  cambiarCliente(): void {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Cristian',
    edad: 24,
    direccion: 'Alberdi, Merlo'
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async Pipe
  miObservable = interval(5000); //0, 1, 2, 3, 4, 5, 6

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500);

  });

}
