import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
  PLATFORM_ID,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
 } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() title: string = 'Bar Chart';
  @Input() categories: string[] = [];
  @Input() series: Highcharts.SeriesOptionsType[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  updateFlag: boolean = false;
  isBrowser: boolean = false;

  /**
   *
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initChart();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.updateFlag = true;
    }
    this.cdr.detectChanges(); // Ensure the chart is updated after view initialization
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isBrowser && changes['series'] && !changes['series'].firstChange) {
      this.initChart();
      this.updateFlag = true;
    }
  }

  initChart(): void {
    this.chartOptions = {
      chart: { type: 'column' },
      title: { text: this.title || 'Default Bar Title' },
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
