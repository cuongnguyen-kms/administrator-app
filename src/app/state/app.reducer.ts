import { createReducer, on } from "@ngrx/store";
import { setLanguageSuccess } from "./app.actions";

export const initialState = {
  language: 'en',
};


export const appReducer = createReducer(
  initialState,
  on(setLanguageSuccess, (state, { language }) => ({ ...state, language })),
);
