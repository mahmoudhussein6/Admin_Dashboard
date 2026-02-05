import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart-card',
  standalone: false,
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'], // Corrected from styleUrl to styleUrls
})
export class ChartCardComponent {
  @Input() title!: string;
  @Input('data') data?: ChartConfiguration['data'];
  @Input('options') options?: ChartConfiguration['options'];
  @Input() chartData?: ChartConfiguration['data'];
  @Input() chartOptions?: ChartConfiguration['options'];
  @Input() chartType: ChartConfiguration['type'] = 'line';

  get resolvedData(): ChartConfiguration['data'] | undefined {
    return this.chartData ?? this.data;
  }

  get resolvedOptions(): ChartConfiguration['options'] | undefined {
    return this.chartOptions ?? this.options;
  }
}
