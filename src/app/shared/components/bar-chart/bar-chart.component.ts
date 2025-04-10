import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnChanges {
  @Input() title: string = 'Bar Chart';
  @Input() categories: string[] = [];
  @Input() series: Highcharts.SeriesOptionsType[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      chart: { type: 'column' },
      title: { text: this.title },
      xAxis: { categories: this.categories, crosshair: true },
      yAxis: { min: 0, title: { text: 'Value' } },
      series: this.series,
      tooltip: {
        shared: true,
        useHTML: true,
      },
      credits: { enabled: false },
    };
  }
}
