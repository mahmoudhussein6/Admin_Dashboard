import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatCardComponent } from './stat-card.component';
import { CommonModule } from '@angular/common';

describe('StatCardComponent', () => {
    let component: StatCardComponent;
    let fixture: ComponentFixture<StatCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, StatCardComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(StatCardComponent);
        component = fixture.componentInstance;

        // Set inputs
        component.title = 'Total Revenue';
        component.value = '$52.6k';
        component.icon = 'pie_chart';

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the correct title and value', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.title')?.textContent).toContain('Total Revenue');
        expect(compiled.querySelector('.value')?.textContent).toContain('$52.6k');
    });

    it('should render the correct icon', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.material-icons')?.textContent).toContain('pie_chart');
    });
});
