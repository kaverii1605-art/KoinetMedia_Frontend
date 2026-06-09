import { Component, OnInit } from '@angular/core';
import { InfographicService } from '../../services/infographic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  visibleCount: number = 7;
  searchText: string = '';

  constructor(private infographicService: InfographicService) {}

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
    this.visibleCount += 6;
  }

  searchInfographics(): void {
    this.filteredInfo = this.infographics.filter(info =>
      info.title?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      info.content?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
