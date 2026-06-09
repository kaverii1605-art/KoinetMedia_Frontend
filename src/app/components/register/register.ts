import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  role = '';

  message = '';
  messageColor = 'red';

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match!';
      this.messageColor = 'red';
      return;
    }

    this.message = 'Please wait...';
    this.messageColor = 'gray';

    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.http.post<any>(`${this.apiUrl}/register`, userData).subscribe({
      next: (res) => {
        this.message = res.message || 'Registration successful!';
        this.messageColor = 'green';

        localStorage.setItem('registeredEmail', this.email);

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (err) => {
        console.error('Registration error:', err);
        this.message = err.error?.message || 'Registration failed';
        this.messageColor = 'red';
      }
    });
  }
}