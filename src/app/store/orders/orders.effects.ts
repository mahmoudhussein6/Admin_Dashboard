import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from '../../core/services/orders.service';
import * as OrdersActions from './orders.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrdersEffects {
  private actions$ = inject(Actions);
  private ordersService = inject(OrdersService);

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      mergeMap(() => this.ordersService.getOrders().pipe(
        map(orders => OrdersActions.loadOrdersSuccess({ orders })),
        catchError(error => of(OrdersActions.loadOrdersFailure({ error })))
      ))
    )
  );
}
