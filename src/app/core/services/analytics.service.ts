import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Analytics } from '../models/analytics.model';


@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  getStats(): Observable<Analytics[]> {
    return of([
      {
        title: 'Total Revenue',
        value: '$52.6k',
        icon: 'pie_chart',
        trend: '+3.4%',
        trendDirection: 'up',
        iconColor: 'blue'
      },
      {
        title: 'Today Revenue',
        value: '$1024',
        icon: 'show_chart',
        trend: '-5.0%',
        trendDirection: 'down',
        iconColor: 'orange'
      },
      {
        title: 'Items Sold',
        value: '22',
        icon: 'shopping_cart',
        iconColor: 'blue'
      },
      {
        title: 'Users Active',
        value: '11',
        icon: 'people',
        iconColor: 'purple'
      }
    ] as Analytics[]).pipe(delay(500));
  }
}