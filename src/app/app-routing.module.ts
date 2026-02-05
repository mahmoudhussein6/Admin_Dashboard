import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module')
            .then(m => m.LoginModule)
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module')
                    .then(m => m.DashboardModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./modules/orders/orders.module')
                    .then(m => m.OrdersModule)
            },
            {
                path: 'reports',
                loadChildren: () => import('./modules/reports/reports.module')
                    .then(m => m.ReportsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
