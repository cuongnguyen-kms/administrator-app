import { Provider } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

export function provideShared(): Provider[] {
  return [
    // Add shared global providers here if needed
    DashboardService,
  ];
}

