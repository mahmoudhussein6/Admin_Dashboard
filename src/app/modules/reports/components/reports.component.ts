import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { loadAnalytics } from '../../../store/analytics/analytics.actions';
import * as AnalyticsSelectors from '../../../store/analytics/analytics.selectors';
import { Observable } from 'rxjs';
import { Analytics } from '../../../core/models/analytics.model';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
    stats$!: Observable<Analytics[]>;
    loading$!: Observable<boolean>;

    // Revenue Chart
    public revenueChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: [45000, 52000, 48000, 61000, 58000, 70000],
                backgroundColor: '#3B86FF',
                borderRadius: 8
            }
        ]
    };

    public revenueChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        }
    };

    constructor(private store: Store) { }

    ngOnInit() {
        this.store.dispatch(loadAnalytics());
        this.stats$ = this.store.select(AnalyticsSelectors.selectAllStats);
        this.loading$ = this.store.select(AnalyticsSelectors.selectAnalyticsLoading);
    }
}
