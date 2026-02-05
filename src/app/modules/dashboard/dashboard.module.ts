import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Components
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

// Routing
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        DashboardComponent,
    ]
})
export class DashboardModule { }
