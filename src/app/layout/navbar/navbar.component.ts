import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UiStateService } from '../../core/services/ui-state.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public uiState = inject(UiStateService);

    constructor(
        public router: Router,
        public auth: AuthService
    ) { }
}