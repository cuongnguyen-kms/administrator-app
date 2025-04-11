import { createReducer, on } from "@ngrx/store";
import * as DashboardActions from "./dashboard.actions";
import { DashboardData } from "../models/dashboard-data.model";

export interface DashboardState {
  metrics: DashboardData[] | [];
  loading: boolean;
  error: string | null;
}

export const initialDashboardState: DashboardState = {
  metrics: [],
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(DashboardActions.loadDashboardData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DashboardActions.loadDashboardDataSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    metrics: data,
  })),
  on(DashboardActions.loadDashboardDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
