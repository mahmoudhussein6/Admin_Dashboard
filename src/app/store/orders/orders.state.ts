import { Order } from '../../core/models/order.model';

export interface OrdersState {
  orders: Order[];
  loading: boolean;
}

export const initialOrdersState: OrdersState = {
  orders: [],
  loading: false
};
