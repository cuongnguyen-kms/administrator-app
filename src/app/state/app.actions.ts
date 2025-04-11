import { createAction, props } from "@ngrx/store";

export const setLanguage = createAction(
  '[App] Set Language',
  props<{ language: string }>(),
);

export const setLanguageSuccess = createAction(
  '[App] Set Language Success',
  props<{ language: string }>(),
);

export const setLanguageFailure = createAction(
  '[App] Set Language Failure',
  props<{ error: string }>(),
);
