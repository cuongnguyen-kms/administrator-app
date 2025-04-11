import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DashboardState } from "./dashboard.reducer";

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardMetrics = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.metrics
);

export const selectDashboardLoading = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.loading
);

export const selectDashboardError = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.error
);
