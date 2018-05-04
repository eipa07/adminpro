import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public progreso: number;

  constructor() {
    this.progreso = 50;
  }

  ngOnInit() {
  }



}
