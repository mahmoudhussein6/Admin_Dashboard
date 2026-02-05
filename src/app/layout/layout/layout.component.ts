import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiStateService } from '../../core/services/ui-state.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public uiState = inject(UiStateService);
  isCollapsed$ = this.uiState.sidebarCollapsed$;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      this.uiState.setSidebarCollapsed(true);
    }
  }
}
