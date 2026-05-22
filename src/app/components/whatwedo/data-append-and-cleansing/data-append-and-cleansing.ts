import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-data-append-and-cleansing',
  standalone: false,
  templateUrl: './data-append-and-cleansing.html',
  styleUrl: './data-append-and-cleansing.css',
})
export class DataAppendAndCleansing implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const elements = document.querySelectorAll('.feature-card, .pillar-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
}