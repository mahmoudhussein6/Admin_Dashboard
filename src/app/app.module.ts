import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Core & Layout
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // TODO: Uncomment after installing @ngrx/store-devtools
import { analyticsReducer } from './store/analytics/analytics.reducer';
import { AnalyticsEffects } from './store/analytics/analytics.effects';
import { ordersReducer } from './store/orders/orders.reducer';
import { OrdersEffects } from './store/orders/orders.effects';

// Root Component
import { AppComponent } from './app.component';

// Chart.js registration
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // Core (imported once)
        CoreModule,

        // Layout
        LayoutModule,

        // NgRx Root Store
        StoreModule.forRoot({ analytics: analyticsReducer, orders: ordersReducer }),
        EffectsModule.forRoot([AnalyticsEffects, OrdersEffects]),
        // TODO: Uncomment after installing @ngrx/store-devtools
        // StoreDevtoolsModule.instrument({
        //     maxAge: 25,
        //     logOnly: false
        // }),

        // Routing (must be last)
        AppRoutingModule
    ],
    providers: [
        provideCharts(withDefaultRegisterables())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
