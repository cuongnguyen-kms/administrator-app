import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  PLATFORM_ID,
  ChangeDetectorRef,
 } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() title: string = 'Pie Chart';
  @Input() series: Highcharts.SeriesOptionsType = {
    type: 'pie',
    name: '',
    data: []
  };

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  isBrowser: boolean = false;
  updateFlag: boolean = false;

  /**
   *
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.isBrowser) {
      this.initChart();
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
      chart: { type: 'pie' },
      title: { text: this.title || 'Default Pie Title' },
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
