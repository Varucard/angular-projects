import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Mercedes',
    favoritos: [
      { id: 1, nombre: 'GuildWars2' },
      { id: 2, nombre: 'The Sims 4' }
    ]
  }

  //TODO: Validacion de elementos repetidos - Validacion al momento de eliminar o editar - Mejorar la creación de ID
  agregarJuego() {

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('Hasta aca');
  }
}
