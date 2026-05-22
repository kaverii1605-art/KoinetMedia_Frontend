import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';

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

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {

        const currentUrl = event.urlAfterRedirects;

        // Hide only on login and register pages
        this.showLayout = currentUrl !== '/login' && currentUrl !== '/register' && currentUrl !== '/addblog' 
        && currentUrl !== '/addinfographics' && currentUrl !== '/addarticle';
      });
  }
}