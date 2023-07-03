import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'JXPiULiY2dH382UVJsn63eSs1ubQmYUn';
  private _historial: string[] = [];
  private _limiteResultado: number = 10;

  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // Cargar del LocalStorage los datos guardados del Historial
    // if (localStorage.getItem('historial')) this._historial = JSON.parse(localStorage.getItem('historial')!);

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || [];
  }

  buscarGifs(query: string = ''): void {

    // Elimino los espacios en blanco y almaceno todo en Minusculas
    query = query.trim().toLocaleLowerCase();

    // Si el valor es null no lo guarda
    if (query.trim().length === 0) return;

    // Solo si no existe lo almaceno
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      // Mantengo solo un limite de 10 elementos en el Historial
      this._historial = this._historial.splice(0, this._limiteResultado);

      // Grabar el Historial en el Local Storage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // Creando un objeto para los parametros a utilizar en la petición HTTP
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', this._limiteResultado.toString())
      .set('q', query);

    // Realizar la consulta a la API
    this.http.get<SearchGifsResponse>(`${ this._servicioUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;

        // Almaceno la ultima busqueda
        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados));
      })

  }

}
