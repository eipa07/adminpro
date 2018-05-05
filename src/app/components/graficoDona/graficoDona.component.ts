import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-graficoDona',
  templateUrl: './graficoDona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input('chartLabels') doughnutChartLabels: string[];
  @Input('chartData') doughnutChartData: number[];
  @Input('chartType') doughnutChartType: string;



  constructor() {
    // this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    // this.doughnutChartData = [350, 450, 100];
    // this.doughnutChartType = 'doughnut';

  }

  ngOnInit() {
    // console.log(this.doughnutChartLabels);
    // console.log(this.doughnutChartData);
    // console.log(this.doughnutChartType);
  }

}
