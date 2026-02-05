import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Components
import { ReportsComponent } from './components/reports.component';

// Routing
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        ReportsRoutingModule,
        ReportsComponent
    ]
})
export class ReportsModule { }
