import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  public ajustes: Ajustes;

  constructor(
    @Inject(DOCUMENT) private _document
  ) {
    this.ajustes = {
      temaUrl : 'assets/css/colors/default-dark.css',
      tema: 'default'
    };

    this.cargarAjustes();
   }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
    } else {

      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema( tema: string ) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}


interface Ajustes {
  temaUrl: string;
  tema: string;
}
