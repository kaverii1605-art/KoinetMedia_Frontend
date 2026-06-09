import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as THREE from 'three';
import { Footer } from '../footer/footer';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homecomponent',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css',
})
export class Homecomponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('earthCanvas', { static: false }) earthCanvas?: ElementRef<HTMLCanvasElement>;

  constructor(private cdr: ChangeDetectorRef,private http: HttpClient) {}

  // words: string[] = ['Global Reach', 'Better Leads', 'Brand Growth', 'More Sales'];
  
  private wordIndex = 0;
  private intervalId: any;

infographics: any[] = [];
  blogs: any[] = [];
currentPage = 0;
pageSize = 3;
isLastPage = false;
 

ngAfterViewInit(): void {
    this.initEarth();
    this.animateEarth();
    this.initScrollAnimations();

    window.addEventListener('resize', this.onResize);
  }

  testimonials = [
    {
      text: 'Koinet Media helped us scale our outreach and boost lead quality significantly. A fantastic experience!',
      author: 'Mark Thompson'
    },
    {
      text: 'Their data-driven marketing approach increased our customer engagement by 45%. Highly recommend!',
      author: 'Lisa Carter'
    },
    {
      text: 'Exceptional service! Koinet Media played a key role in expanding our B2B network with qualified leads.',
      author: 'David Ramirez'
    }
  ];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private earth!: THREE.Mesh;
  private glow!: THREE.Mesh;
  private animationId!: number;

   

 


private initScrollAnimations(): void {
  setTimeout(() => {
    const animatedItems = document.querySelectorAll(
      `
      .section-title,
      .section-desc,
      .feature-box,
      .service-box,
      .service-img,
      .main-image,
      .roundedshadow,
      .testimonial-box,
      .feature-item,
      .floating-box,
      .pillar-card,
      .contact-btn-wrapper
      `
    );

    animatedItems.forEach((item, index) => {
      item.classList.add('motion-reveal');

      if (index % 4 === 1) item.classList.add('motion-delay-1');
      if (index % 4 === 2) item.classList.add('motion-delay-2');
      if (index % 4 === 3) item.classList.add('motion-delay-3');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedItems.forEach((item) => observer.observe(item));
  }, 300);
}

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    window.removeEventListener('resize', this.onResize);

    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initEarth(): void {
    if (!this.earthCanvas?.nativeElement) return;

    const canvas = this.earthCanvas.nativeElement;

    this.scene = new THREE.Scene();

    const width = canvas.clientWidth || 500;
    const height = canvas.clientHeight || 500;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 3.1;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height, false);

    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load('assets/images/earth-flags.png');
    const bumpTexture = textureLoader.load('assets/images/earth-flags.png');

    const geometry = new THREE.SphereGeometry(1, 96, 96);

    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.02,
      roughness: 0.95,
      metalness: 0.02
    });


    this.earth = new THREE.Mesh(geometry, material);
    this.scene.add(this.earth);

    const glowGeometry = new THREE.SphereGeometry(1.08, 96, 96);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.12
    });

    this.glow = new THREE.Mesh(glowGeometry, glowMaterial);
    this.scene.add(this.glow);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
    directionalLight.position.set(3, 2, 4);
    this.scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x3b82f6, 0.8);
    backLight.position.set(-3, -1, -2);
    this.scene.add(backLight);

    const topLight = new THREE.PointLight(0xffffff, 0.8);
    topLight.position.set(0, 3, 3);
    this.scene.add(topLight);
  }

  private animateEarth = (): void => {
    this.animationId = requestAnimationFrame(this.animateEarth);

    if (!this.renderer || !this.scene || !this.camera) return;

    if (this.earth) {
      this.earth.rotation.y += 0.0045;
      this.earth.rotation.x = 0.08;
    }

    if (this.glow) {
      this.glow.rotation.y += 0.0045;
      this.glow.rotation.x = 0.08;
    }

    this.renderer.render(this.scene, this.camera);
  };

  private onResize = (): void => {
    if (!this.renderer || !this.camera || !this.earthCanvas?.nativeElement) return;

    const canvas = this.earthCanvas.nativeElement;
    const width = canvas.clientWidth || 500;
    const height = canvas.clientHeight || 500;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  };


  words: string[] = [
  'Global Reach',
  'Better Leads',
  'Brand Growth', 
  'Scalable Success',
  'More Sales',
 
];

features: { icon: string; title: string; desc: string }[] = [
  {
    icon: 'bi bi-globe2',
    title: 'Global Reach',
    desc: 'Expand your brand presence across targeted global B2B markets.'
  },
  {
    icon: 'bi bi-bar-chart-line',
    title: 'Better Leads',
    desc: 'Generate high-quality prospects using accurate business insights.'
  },
  {
    icon: 'bi bi-people',
    title: 'Brand Growth',
    desc: 'Build stronger relationships with the right decision-makers.'
  },
 
  {
    icon: 'bi bi-gear',
    title: 'Scalable Success',
    desc: 'Flexible marketing systems that grow with your sales pipeline.'
  },
   {
    icon: 'bi bi-chat-dots',
    title: 'More Sales',
    desc: 'Convert qualified leads into measurable business opportunities.'
  },
];

currentWord: string = this.words[0];
activeIndex: number = 0;
activeFeature = this.features[0];



ngOnInit(): void {

  // Word animation
  this.intervalId = setInterval(() => {
    this.activeIndex = (this.activeIndex + 1) % this.features.length;

    this.currentWord = this.words[this.activeIndex];
    this.activeFeature = this.features[this.activeIndex];

    this.cdr.detectChanges();
  }, 2500);

  // Load blogs + infographics
  forkJoin({
    blogs: this.http.get<any>(
      'https://koinetmedia-backend-61w7.onrender.com/api/getblogs?page=0&size=3'
    ),
    infographics: this.http.get<any>(
      'https://koinetmedia-backend-61w7.onrender.com/api/getinfo?page=0'
    )
  }).subscribe({
    next: (result) => {
      this.blogs = result.blogs.content || result.blogs;
      this.infographics = result.infographics.content || result.infographics;
    },
    error: (err) => {
      console.error('API Error:', err);
    }
  });
}

fetchInfographics(page: number = 0) {
  fetch(`https://koinetmedia-backend-61w7.onrender.com/api/getinfo?page=${page}`)
    .then(res => res.json())
    .then(data => {
      this.infographics = data.content || data;
      console.log('INFOGRAPHICS:', this.infographics);
    })
    .catch(err => {
      console.error('Error fetching infographics:', err);
    });
}

fetchBlogs(page: number = 0) {
  fetch(`https://koinetmedia-backend-61w7.onrender.com/api/getblogs?page=${page}&size=${this.pageSize}`)
    .then(res => res.json())
    .then(data => {
      this.blogs = data.content || data;
      this.currentPage = page;
      this.isLastPage = data.last === true || this.blogs.length < this.pageSize;
    })
    .catch(err => {
      console.error('Error fetching blogs:', err);
    });
}

prevPage() {
  if (this.currentPage > 0) {
    this.fetchBlogs(this.currentPage - 1);
  }
}

nextPage() {
  if (!this.isLastPage) {
    this.fetchBlogs(this.currentPage + 1);
  }
}
  
}



