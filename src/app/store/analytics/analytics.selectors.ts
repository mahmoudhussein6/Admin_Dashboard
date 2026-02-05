import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnalyticsState } from './analytics.reducer';

// 1️⃣ Feature selector
export const selectAnalyticsState = createFeatureSelector<AnalyticsState>('analytics');

// 2️⃣ Selector للبيانات
export const selectAllStats = createSelector(
  selectAnalyticsState,
  (state: AnalyticsState) => state.data
);

// 3️⃣ Selector للـ loading (اختياري)
export const selectAnalyticsLoading = createSelector(
  selectAnalyticsState,
  (state: AnalyticsState) => state.loading
);

// 4️⃣ Selector للـ error (اختياري)
export const selectAnalyticsError = createSelector(
  selectAnalyticsState,
  (state: AnalyticsState) => state.error
);
