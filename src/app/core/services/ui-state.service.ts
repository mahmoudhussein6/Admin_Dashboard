import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiStateService {
    private sidebarCollapsed = new BehaviorSubject<boolean>(false);
    sidebarCollapsed$ = this.sidebarCollapsed.asObservable();

    toggleSidebar() {
        this.sidebarCollapsed.next(!this.sidebarCollapsed.value);
    }

    setSidebarCollapsed(collapsed: boolean) {
        this.sidebarCollapsed.next(collapsed);
    }
}
