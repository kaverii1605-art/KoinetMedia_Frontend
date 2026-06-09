import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InfographicService } from '../../services/infographic';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './info-details.html',
  styleUrls: ['./info-details.css']
})
export class InfoDetails implements OnInit {

   info: any;

  infographics: any[] = [];

  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infographicService: InfographicService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    console.log('Route ID:', id);

    this.infographicService.getAllInfo().subscribe({

      next: (data: any[]) => {

        console.log('All Infographics:', data);

        this.infographics = data;

        this.currentIndex = this.infographics.findIndex(
          item => item.id == id || item._id == id
        );

        console.log('Current Index:', this.currentIndex);

        if (this.currentIndex !== -1) {
          this.info = this.infographics[this.currentIndex];
          console.log('Selected Info:', this.info);
        }

      },

      error: (err) => {
        console.error('Error loading infographic details', err);
      }

    });

  }

  prevInfo(): void {

    if (this.currentIndex > 0) {

      this.currentIndex--;

      this.info = this.infographics[this.currentIndex];

      this.router.navigate([
        '/infodetails',
        this.info.id || this.info._id
      ]);

    }
  }

  nextInfo(): void {

    if (this.currentIndex < this.infographics.length - 1) {

      this.currentIndex++;

      this.info = this.infographics[this.currentIndex];

      this.router.navigate([
        '/infodetails',
        this.info.id || this.info._id
      ]);

    }
  }
}