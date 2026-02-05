import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { loadAnalytics } from '../../store/analytics/analytics.actions';
import { loadOrders } from '../../store/orders/orders.actions';
import * as AnalyticsSelectors from '../../store/analytics/analytics.selectors';
import { Observable } from 'rxjs';
import { Analytics } from '../../core/models/analytics.model';
import { SharedModule } from '../../shared/shared.module';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, RecentOrdersComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stats$!: Observable<Analytics[]>; // observable للبيانات
  loading$!: Observable<boolean>;   // observable للـ loading

  // Sales Chart Config
  public salesChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20000, 35000, 30000, 50000, 45000, 60000, 70000],
        label: 'Sales ($)',
        fill: true,
        tension: 0.4,
        borderColor: '#3B86FF',
        backgroundColor: 'rgba(59, 134, 255, 0.1)',
        pointBackgroundColor: '#3B86FF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3B86FF'
      }
    ]
  };
  public salesChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y}`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#A4A6B3' }
      },
      y: {
        grid: { color: '#F0F0F0', display: true },
        ticks: { color: '#A4A6B3', callback: (value) => `$${value}` },
        beginAtZero: true
      }
    }
  };

  // Visits Chart Config
  public visitsChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        data: [15, 20, 12, 18, 10, 5, 8],
        label: 'Visits',
        backgroundColor: '#3B86FF',
        borderWidth: 0,
        borderRadius: 4,
        barPercentage: 0.6
      }
    ]
  };
  public visitsChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#A4A6B3' }
      },
      y: {
        display: false,
        beginAtZero: true
      }
    }
  };

  constructor(private store: Store) { }

  ngOnInit() {
    // dispatch actions لجلب البيانات
    this.store.dispatch(loadAnalytics());
    this.store.dispatch(loadOrders());

    // select البيانات
    this.stats$ = this.store.select(AnalyticsSelectors.selectAllStats);
    this.loading$ = this.store.select(AnalyticsSelectors.selectAnalyticsLoading);
  }
}
