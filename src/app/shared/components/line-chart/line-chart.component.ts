import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnChanges {
  @Input() title = '';
  @Input() categories: string[] = [];
  @Input() series: Highcharts.SeriesOptionsType[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      chart: { type: 'line' },
      title: { text: this.title || '' },
      xAxis: { categories: this.categories || [] },
      yAxis: { title: { text: 'Value' } },
      series: this.series || [],
      credits: { enabled: false }
    };
  }
}
