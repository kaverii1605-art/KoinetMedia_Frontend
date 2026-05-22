import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-demandgeneration',
  standalone: false,
  templateUrl: './demandgeneration.html',
  styleUrl: './demandgeneration.css',
})
export class Demandgeneration implements AfterViewInit {

  features = [
    {
      icon: 'assets/images/demand1.png',
      title: 'Predict Buying Behavior',
      desc: 'Target leads with AI precision'
    },
    {
      icon: 'assets/images/demand2.png',
      title: 'Audience Segmentation',
      desc: 'Deliver personalized outreach'
    },
    {
      icon: 'assets/images/demand3.png',
      title: 'Real-Time Content',
      desc: 'Dynamic messaging'
    },
    {
      icon: 'assets/images/demad1.png',
      title: 'Lead Scoring',
      desc: 'Optimize campaigns'
    }
  ];

  pillars = [
    {
      img: 'assets/images/ser1.png',
      title: 'Align Sales & Marketing',
      points: ['Seamless collaboration', 'Unified strategies']
    },
    {
      img: 'assets/images/ser2.png',
      title: 'Personalized Messaging',
      points: ['Tailored content', 'Dynamic messaging']
    }
  ];

  intentList = [
    { icon: 'fas fa-search', text: 'Track behavior' },
    { icon: 'fas fa-chart-pie', text: 'Analyze engagement' },
    { icon: 'fas fa-envelope', text: 'Send smart messaging' }
  ];

  demandPoints = [
    {
      title: 'High-Value Leads',
      desc: 'Target right prospects'
    },
    {
      title: 'Warm Leads',
      desc: 'Sales-ready pipeline'
    },
    {
      title: 'Revenue Growth',
      desc: 'Data-driven strategies'
    }
  ];

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const elements = document.querySelectorAll('.feature-card, .pillar-card, .intent-item');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
}