import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  login(role: 'admin' | 'user') {
    this.userSubject.next({ id: 1, name: 'Mahmoud Hussein', role });
  }


  logout() {
    this.userSubject.next(null);
  }


  get currentUser(): User | null {
    return this.userSubject.value;
  }


  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}