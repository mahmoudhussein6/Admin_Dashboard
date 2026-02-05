import { createReducer, on } from '@ngrx/store';
import * as AnalyticsActions from './analytics.actions';
import { Analytics } from '../../core/models/analytics.model';


export interface AnalyticsState {
    data: Analytics[];
    loading: boolean;
    error: any;
}


export const initialState: AnalyticsState = {
    data: [],
    loading: false,
    error: null
};


export const analyticsReducer = createReducer(
    initialState,
    on(AnalyticsActions.loadAnalytics, state => ({ ...state, loading: true })),
    on(AnalyticsActions.loadAnalyticsSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false
    })),
    on(AnalyticsActions.loadAnalyticsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
    }))
);