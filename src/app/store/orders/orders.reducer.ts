import { createReducer, on } from '@ngrx/store';
import * as OrdersActions from './orders.actions';
import { Order } from '../../core/models/order.model';

export interface OrdersState {
  data: Order[];
  loading: boolean;
  error: any;
}

export const initialState: OrdersState = {
  data: [],
  loading: false,
  error: null
};

export const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.loadOrders, state => ({ ...state, loading: true })),
  on(OrdersActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    data: orders,
    loading: false
  })),
  on(OrdersActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
