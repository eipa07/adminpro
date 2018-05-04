import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string;
  @Input() progreso: number;

  constructor() {
    this.leyenda = 'Leyenda';
    this.progreso = 50;

    console.log('Leyenda: ' + this.leyenda);
    console.log('progreso: ' + this.progreso);
  }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return false;

    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return false;

    } else {
      this.progreso = this.progreso + valor;

    }

  }

}
