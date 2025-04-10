import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnChanges {
  @Input() title: string = 'Pie Chart';
  @Input() series: Highcharts.SeriesOptionsType = {
    type: 'pie',
    name: '',
    data: []
  };

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      chart: { type: 'pie' },
      title: { text: this.title },
      series: [this.series],
      tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y}' }
        }
      },
      credits: { enabled: false }
    };
  }
}
