import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-appointmentgeneration',
  standalone: false,
  templateUrl: './appointmentgeneration.html',
  styleUrl: './appointmentgeneration.css',
})
export class Appointmentgeneration implements AfterViewInit {

  features = [
    {
      icon: 'assets/images/appoint1.png',
      title: 'Behavior Analysis',
      desc: 'AI analyzes customer behavior'
    },
    {
      icon: 'assets/images/appoint2.png',
      title: 'Customized Outreach',
      desc: 'Personalized engagement'
    },
    {
      icon: 'assets/images/appoint3.png',
      title: 'Higher Engagement',
      desc: 'More meetings and conversions'
    }
  ];

  pillars = [
    {
      img: 'assets/images/ser1.png',
      title: 'Multi-Channel',
      points: ['Email, LinkedIn, SMS', 'Reach everywhere']
    },
    {
      img: 'assets/images/ser2.png',
      title: 'Consistent Messaging',
      points: ['Build trust', 'Seamless communication']
    },
    {
      img: 'assets/images/ser3.png',
      title: 'Personalized Engagement',
      points: ['Preferred channels', 'Higher response']
    }
  ];

  outreachList = [
    'Best timing using AI',
    'Lead scoring',
    'Predictive analytics'
  ];

  advantages = [
    {
      title: 'AI + Human Expertise',
      desc: 'Best of both worlds'
    },
    {
      title: 'High-Quality Leads',
      desc: 'Only decision-makers'
    },
    {
      title: 'End-to-End Management',
      desc: 'We handle everything'
    }
  ];

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  initScrollAnimation() {
    const elements = document.querySelectorAll('.feature-card, .pillar-card, .advantage-item');

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