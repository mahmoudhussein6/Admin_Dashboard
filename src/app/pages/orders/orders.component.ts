import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order.model';
import { loadOrders } from '../../store/orders/orders.actions';
import { selectOrders, selectOrdersLoading, selectOrdersError } from '../../store/orders/orders.selectors';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$!: Observable<Order[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
    this.orders$ = this.store.select(selectOrders);
    this.loading$ = this.store.select(selectOrdersLoading);
    this.error$ = this.store.select(selectOrdersError);
  }
}
