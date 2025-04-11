import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  PLATFORM_ID,
  Inject,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() title = '';
  @Input() categories: string[] = [];
  @Input() series: Highcharts.SeriesOptionsType[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  isBrowser: boolean = false;
  updateFlag: boolean = false;

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
      chart: { type: 'line' },
      title: { text: this.title || 'Default Line Title' },
      xAxis: { categories: this.categories || [] },
      yAxis: { title: { text: 'Value' } },
      series: this.series || [],
      credits: { enabled: false }
    };
  }
}
