import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email: string = '';
  password: string = '';
  message: string = '';
  messageColor: string = 'red';
  showPassword: boolean = false;

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginUser() {

    this.http.post<any>(`${this.apiUrl}/login`, {
      email: this.email,
      password: this.password
    }).subscribe({

      next: (res) => {

        console.log('LOGIN RESPONSE:', res);

        if (res.message === 'Login successful') {

          if (res.token) {
            localStorage.setItem('token', res.token);
          }

          localStorage.setItem('userEmail', this.email);

          this.message = 'Login successful!';
          this.messageColor = 'green';

          setTimeout(() => {
            this.router.navigate(['/addblog']);
          }, 1000);

        } else {

          this.message = res.message || 'Invalid login';
          this.messageColor = 'red';

        }
      },

      error: (err) => {

        console.error('LOGIN ERROR:', err);

        this.message = 'Login failed';
        this.messageColor = 'red';

      }

    });
  }
}