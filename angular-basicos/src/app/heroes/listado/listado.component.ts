import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';
  // borrado: boolean = false;

  borrarHeroe():void {
     this.heroeBorrado = this.heroes.pop() || '';

    //  if (this.heroeBorrado != '')
      // this.borrado = true;
  }
}
