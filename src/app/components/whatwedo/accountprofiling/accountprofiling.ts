import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-accountprofiling',
  standalone: false,
  templateUrl: './accountprofiling.html',
  styleUrl: './accountprofiling.css',
})
export class Accountprofiling implements AfterViewInit {

  profilingPoints = [
    'Analyze large data to create full customer profiles',
    'Identify key decision makers',
    'Engage with hyper relevant messaging'
  ];

  omnichannel = [
    {
      icon: 'assets/images/account1.png',
      title: 'Data Sync',
      desc: 'Sync customer data across all platforms'
    },
    {
      icon: 'assets/images/account2.png',
      title: 'Aligned Messaging',
      desc: 'Ensure consistent messaging'
    },
    {
      icon: 'assets/images/account3.png',
      title: 'Improved Collaboration',
      desc: 'Better teamwork and ROI'
    }
  ];

  intentCards = [
    {
      img: 'assets/images/ser1.png',
      title: 'Track Buyer Signals',
      points: [
        'Identify prospects at peak interest',
        'Monitor behavior patterns'
      ]
    },
    {
      img: 'assets/images/ser2.png',
      title: 'Trigger Outreach',
      points: [
        'Engage at the right time',
        'Automate personalized outreach'
      ]
    },
    {
      img: 'assets/images/ser3.png',
      title: 'Be First to Market',
      points: [
        'Act on opportunities fast',
        'Gain competitive advantage'
      ]
    }
  ];

  services = [
    {
      icon: 'fas fa-user-check',
      title: 'AI Profiling',
      desc: 'Deep customer insights'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Omnichannel',
      desc: 'Consistent engagement'
    },
    {
      icon: 'fas fa-envelope-open-text',
      title: 'Intent Outreach',
      desc: 'Right message, right time'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'ABM Strategy',
      desc: 'Growth-focused targeting'
    }
  ];

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const elements = document.querySelectorAll(
      '.feature-card, .pillar-card, .lead-card'
    );

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