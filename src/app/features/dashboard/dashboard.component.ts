import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_IMPORTS } from '../../shared';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    TranslateModule,
    ...SHARED_IMPORTS,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnDestroy {
  reports = [
    { header: 'Orders', title: 'Total Orders', description: 'Last 24 hours', value: 1280 },
    { header: 'Revenue', title: 'Total Revenue', description: 'This week', value: 45.900 },
    { header: 'Users', title: 'Active Users', description: 'Currently online', value: 230 }
  ];

  categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  barCategories = ['Electronics', 'Clothing', 'Home', 'Other'];
  series: Highcharts.SeriesOptionsType[] = [
    {
      type: 'line',
      name: 'Revenue',
      data: [12000, 15000, 18000, 13000, 17000, 20000, 22000]
    }
  ];

  pieSeries: Highcharts.SeriesOptionsType = {
    type: 'pie',
    data: this.barCategories.map(cat => ({
      name: cat,
      y: Math.floor(Math.random() * 100) + 10,
    })),
  };

  barSeries: Highcharts.SeriesOptionsType[] = [
    { type: 'column', name: 'Sales', data: [12000, 8000, 6000, 3000] }
  ];

  private subscription: Subscription;

  constructor() {
    this.subscription = interval(3000).subscribe(() => {
      this.updateReports();
      this.updateLineChartData();
      this.updatePieAndBarChartsData();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateReports() {
    this.reports = this.reports.map(report => ({
      ...report,
      value: this.generateRandomValue(report.header)
    }));
  }

  updateLineChartData() {
    const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 20000 + 10000));
    this.series = [
      {
        type: 'line',
        name: 'Revenue',
        data: newData
      }
    ];
  }

  updatePieAndBarChartsData() {
    const pieData = this.barCategories.map(cat => ({
      name: cat,
      y: Math.floor(Math.random() * 100) + 10
    }));

    const barData = pieData.map(p => p.y);

    this.pieSeries = {
      type: 'pie',
      name: 'Sales',
      data: pieData
    };

    this.barSeries = [
      {
        type: 'column',
        name: 'Sales',
        data: barData
      }
    ];
  }

  generateRandomValue(header: string): number {
    switch (header) {
      case 'Orders': return Math.floor(1000 + Math.random() * 500);
      case 'Revenue': return Math.floor((40000 + Math.random() * 10000));
      case 'Users': return Math.floor(200 + Math.random() * 100);
      default: return 0;
    }
  }
}
