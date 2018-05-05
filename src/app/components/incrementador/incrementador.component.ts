import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // Para tomar el valor que viene desde fuera, de lo contrario tengo qeu asignarlo dentro de esta clase
  @Input('nombre') leyenda: string;
  @Input() progreso: number;

  @Output() cambioValor: EventEmitter<number>;

  constructor() {
    this.leyenda = 'Leyenda';
    this.progreso = 50;
    this.cambioValor = new EventEmitter();

    // console.log('Leyenda: ' + this.leyenda);
    // console.log('progreso: ' + this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda: ' + this.leyenda);
    // console.log('progreso: ' + this.progreso);
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
      this.cambioValor.emit( this.progreso );
      this.txtProgress.nativeElement.focus();
    }

  }

  onChanges( newValue: number ) {

    // tslint:disable-next-line:prefer-const
    // let elemHTML: any = document.getElementsByName('progreso')[0];

    console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = Number( this.progreso );
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

  }

}
