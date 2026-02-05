import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order.model';
import { selectOrders } from '../../../store/orders/orders.selectors';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recent-orders',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './recent-orders.component.html',
    styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {
    orders$!: Observable<Order[]>;
    router = inject(Router);

    constructor(private store: Store) { }

    ngOnInit() {
        // Select orders and take only the first 8 for "Recent" view
        this.orders$ = this.store.select(selectOrders).pipe(
            map(orders => orders.slice(0, 8))
        );
    }
}
