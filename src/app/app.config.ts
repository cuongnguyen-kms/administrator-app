import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslate } from './core/i18n/translate.providers';
import { provideShared } from './shared/shared.providers';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';
import { DashboardEffects } from './features/dashboard/state/dashboard.effects';
import { dashboardReducer } from './features/dashboard/state/dashboard.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideTranslate(),
    ...provideShared(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({
      app: appReducer,
      dashboard: dashboardReducer,
    }),
    provideEffects([AppEffects, DashboardEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
