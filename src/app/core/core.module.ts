import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { AuthService } from './services/auth.service';
import { OrdersService } from './services/orders.service';
import { AnalyticsService } from './services/analytics.service';
import { UiStateService } from './services/ui-state.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        OrdersService,
        AnalyticsService,
        UiStateService
    ]
})
export class CoreModule {
    // منع استيراد CoreModule أكثر من مرة
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it only in AppModule');
        }
    }
}
