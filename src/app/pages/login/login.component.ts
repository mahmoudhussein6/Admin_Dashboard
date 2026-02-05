import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Welcome Back</h2>
        <p>Please sign in to continue</p>
        <button (click)="login()">Sign In as Admin</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }
    .login-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
      min-width: 300px;
    }
    h2 { margin-top: 0; color: #333; }
    p { color: #666; margin-bottom: 2rem; }
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover { background-color: #303f9f; }
  `]
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login('admin');
    this.router.navigate(['/']);
  }
}
