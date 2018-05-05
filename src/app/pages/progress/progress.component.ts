import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public progreso1: number;
  public progreso2: number;

  constructor() {
    this.progreso1 = 20;
    this.progreso2 = 30;
  }

  ngOnInit() {
  }

  /**
   * Esta es una forma de hacerlo, desde el html mando llamar el evento que hice al declararl el Output
   * y le asigno una funcion: (cambioValor)="actualizar( $event )"
   * @param event numero
   */
  actualizar( event: number ) {
    console.log('Evento: ' + event);
    this.progreso2 = event;
  }

}
