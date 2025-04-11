import { setLanguage, setLanguageFailure, setLanguageSuccess } from './app.actions';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);
  setLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLanguage),
      tap(({ language }) => this.translate.use(language)),
      map(({ language }) => {
        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('appLang', language);
          }
          return setLanguageSuccess({ language });
        } catch (e: any) {
          return setLanguageFailure({ error: e.message });
        }
      })
    )
  );

  constructor(
    private translate: TranslateService
  ) {}
}
