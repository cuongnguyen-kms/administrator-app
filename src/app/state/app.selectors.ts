import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.models";

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectLanguage = createSelector(
  selectAppState,
  (state: AppState) => state.language
);
