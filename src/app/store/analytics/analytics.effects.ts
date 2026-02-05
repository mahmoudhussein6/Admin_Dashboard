import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AnalyticsActions from './analytics.actions';
import { AnalyticsService } from '../../core/services/analytics.service';


@Injectable()
export class AnalyticsEffects {
    private actions$ = inject(Actions);
    private analyticsService = inject(AnalyticsService);

    loadAnalytics$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AnalyticsActions.loadAnalytics),
            switchMap(() =>
                this.analyticsService.getStats().pipe(
                    map(data => AnalyticsActions.loadAnalyticsSuccess({ data })),
                    catchError(error => of(AnalyticsActions.loadAnalyticsFailure({ error })))
                )
            )
        )
    );
}