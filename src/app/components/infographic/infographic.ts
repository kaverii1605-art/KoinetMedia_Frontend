import { Component, OnInit } from '@angular/core';
import { InfographicService } from '../../services/infographic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infographic',
  standalone: true,
      imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './infographic.html',
  styleUrl: './infographic.css',
})
export class Infographic implements OnInit{

   infographics: any[] = [];
  filteredInfo: any[] = [];

  visibleCount: number = 3;
  searchText: string = '';

    subscriberEmail: string = '';


  constructor(private infographicService: InfographicService,private http: HttpClient) {}

   subscribe() {

    if (!this.subscriberEmail) {
      alert('Please enter your email');
      return;
    }

    this.http.post(
      'https://formspree.io/f/xkolgnak', // Replace with your Formspree ID
      {
        email: this.subscriberEmail
      }
    ).subscribe({
      next: () => {
        alert('Subscribed successfully!');
        this.subscriberEmail = '';
      },
      error: () => {
        alert('Something went wrong.');
      }
    });

  }



  ngOnInit(): void {
    this.fetchInfographics();
  }

  fetchInfographics(): void {
    this.infographicService.getAllInfo().subscribe({
      next: (data) => {
        console.log('INFOGRAPHICS:', data);

        this.infographics = data;
        this.filteredInfo = data;
      },
      error: (err) => {
        console.error('Error fetching infographics', err);
      }
    });
  }

  loadMore(): void {
    this.visibleCount += 3;
  }

  searchInfographics(): void {
    this.filteredInfo = this.infographics.filter(info =>
      info.title?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      info.content?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
