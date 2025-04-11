import { Injectable, inject } from "@angular/core";
import { DashboardService } from "../../../shared/services/dashboard.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as DashboardActions from "./dashboard.actions";
import { of } from "rxjs";

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);

  constructor(private dashboardService: DashboardService) { }

  loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboardData),
      mergeMap(() =>
        this.dashboardService.getDashboardData().pipe(
          map(data => DashboardActions.loadDashboardDataSuccess({ data })),
          catchError(error => of(DashboardActions.loadDashboardDataFailure({ error: error.message })))
        )
      )
    )
  );
}
