import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer,
        FormsModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showLayout = true;

  constructor(private router: Router,private http: HttpClient) {

  // Wake backend
  this.http.get(
    'https://koinetmedia-backend-61w7.onrender.com/api/health',
    { responseType: 'text' }
  ).subscribe({
    next: () => console.log('Backend Awake'),
    error: err => console.log('Backend Wake Failed', err)
  });

  

  // Layout hide/show
this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe((event: any) => {

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 300);

    const currentUrl = event.urlAfterRedirects;

    this.showLayout =
      currentUrl !== '/login' &&
      currentUrl !== '/register' &&
      currentUrl !== '/addblog' &&
      currentUrl !== '/addinfographics' &&
      currentUrl !== '/addarticle';
  })}}