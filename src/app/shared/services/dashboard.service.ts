import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardData } from '../../features/dashboard/models/dashboard-data.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDashboardData(): Observable<DashboardData[]> {
    const mockData: DashboardData[] = [
      { header: 'Orders', title: 'Total Orders', description: 'Last 24 hours', value: 1280 },
      { header: 'Revenue', title: 'Total Revenue', description: 'This week', value: 45.900 },
      { header: 'Users', title: 'Active Users', description: 'Currently online', value: 230 }
    ];
    return of(mockData).pipe(delay(1000)); // Simulate API delay
  }
}
