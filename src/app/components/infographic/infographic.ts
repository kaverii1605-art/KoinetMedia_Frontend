import { Component, OnInit } from '@angular/core';
import { InfographicService } from '../../services/infographic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-infographic',
  standalone: true,
      imports: [CommonModule, FormsModule],

  templateUrl: './infographic.html',
  styleUrl: './infographic.css',
})
export class Infographic implements OnInit{

   infographics: any[] = [];
  filteredInfo: any[] = [];
  visibleCount = 6;
  searchText = '';

  constructor(private infographicService: InfographicService) {}

  ngOnInit(): void {
    this.getInfographics();
  }

  getInfographics() {
    this.infographicService.getAllInfo().subscribe({
      next: (data: any[]) => {
        this.infographics = data;
        this.filteredInfo = data;
      },
      error: (err) => {
        console.log('Error fetching infographics:', err);
      }
    });
  }

  searchInfographics() {
    const text = this.searchText.toLowerCase();

    this.filteredInfo = this.infographics.filter(info =>
      info.title?.toLowerCase().includes(text) ||
      info.content?.toLowerCase().includes(text)
    );

    this.visibleCount = 6;
  }

  loadMore() {
    this.visibleCount += 6;
  }
}
