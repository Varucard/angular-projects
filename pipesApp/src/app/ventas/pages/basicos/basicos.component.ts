import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'cristian';
  nombreTower: string = 'CRISTIAN';
  nombreCompleto: string = 'cRistIan';

  fecha: Date = new Date(); // el día de hoy

}
