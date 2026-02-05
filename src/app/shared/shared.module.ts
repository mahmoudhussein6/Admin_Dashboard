import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

// Reusable Components
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';

const COMPONENTS = [
    StatCardComponent,
    ChartCardComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BaseChartDirective
    ],
    exports: [
        ...COMPONENTS,
        // Re-export common modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BaseChartDirective,

    ]
})
export class SharedModule { }
