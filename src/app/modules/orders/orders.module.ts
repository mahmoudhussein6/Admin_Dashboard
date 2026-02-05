import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Components
import { OrdersComponent } from '../../pages/orders/orders.component';

// Routing
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        OrdersRoutingModule,
        OrdersComponent,
    ]
})
export class OrdersModule { }
