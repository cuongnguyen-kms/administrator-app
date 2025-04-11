import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_IMPORTS } from '../../shared';
import { Observable, Subscription, interval } from 'rxjs';
import { Store } from '@ngrx/store';
import { DashboardState } from './state/dashboard.reducer';
import { loadDashboardData } from './state/dashboard.actions';
import { DashboardData } from './models/dashboard-data.model';
import { selectDashboardMetrics } from './state/dashboard.selectors';

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
export class DashboardComponent implements OnInit, OnDestroy {
  categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  barCategories = ['Electronics', 'Clothing', 'Home', 'Other'];
  series: Highcharts.SeriesOptionsType[] = [
    {
      type: 'line',
      name: 'Revenue',
      data: [12000, 15000, 18000, 13000, 17000, 20000, 22000]
    },
    {
      type: 'line',
      name: 'Quantity',
      data: [300, 649, 10000, 13000, 1700, 7600, 5000]
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
    { type: 'column', name: 'Sales', data: [12000, 8000, 6000, 3000] },
    { type: 'column', name: 'Revenue', data: [340, 100, 298, 150] }
  ];

  private subscription: Subscription;

  reportData$!: Observable<DashboardData[] | []>;

  constructor(private store: Store<DashboardState>) {
    this.subscription = interval(10000).subscribe(() => {
      this.updateLineChartData();
      this.updatePieAndBarChartsData();
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadDashboardData());
    this.reportData$ = this.store.select(selectDashboardMetrics);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateLineChartData() {
    const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 20000 + 10000));
    const quantityData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000 + 5000));
    this.series = [
      {
        type: 'line',
        name: 'Revenue',
        data: newData
      },
      {
        type: 'line',
        name: 'Quantity',
        data: quantityData
      }
    ];
  }

  updatePieAndBarChartsData() {
    const pieData = this.barCategories.map(cat => ({
      name: cat,
      y: Math.floor(Math.random() * 100) + 10
    }));

    const barData = pieData.map(p => p.y);
    const revenueData = this.barCategories.map(cat => Math.floor(Math.random() * 50) + 10);

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
      },
      {
        type: 'column',
        name: 'Revenue',
        data: revenueData
      }
    ];
  }
}
