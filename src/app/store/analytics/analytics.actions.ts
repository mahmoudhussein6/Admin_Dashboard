import { createAction, props } from "@ngrx/store";
import { Analytics } from "../../core/models/analytics.model";

export const loadAnalytics = createAction('[Analytics] Load');
export const loadAnalyticsSuccess = createAction(
    '[Analytics] Load Success',
    props<{ data: Analytics[] }>()
);
export const loadAnalyticsFailure = createAction(
    '[Analytics] Load Failure',
    props<{ error: any }>()
);