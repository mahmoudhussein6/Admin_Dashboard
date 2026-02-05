import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UiStateService } from '../../core/services/ui-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private uiState = inject(UiStateService);
  isCollapsed$ = this.uiState.sidebarCollapsed$;

  mainMenuItems = [
    { label: 'Dashboard', icon: 'dashboard', link: '/' },
    { label: 'Orders', icon: 'shopping_cart', link: '/orders' },
    { label: 'Users', icon: 'people', link: '/users' },
    { label: 'Items', icon: 'inventory_2', link: '/items' },
    { label: 'Transactions', icon: 'receipt_long', link: '/transactions' },
    { label: 'Reports', icon: 'description', link: '/reports' },
  ];

  secondaryMenuItems = [
    { label: 'Messages', icon: 'mail', link: '/messages', badge: true },
    { label: 'Support', icon: 'help', link: '/support' },
    { label: 'Settings', icon: 'settings', link: '/settings' },
  ];

  constructor(public auth: AuthService) { }
}
