import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Articleservice } from '../../services/articleservice';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './addarticle.html',
  styleUrl: './addarticle.css',
})

export class Addarticle {

  submittedArticle: any;

  totalArticles: number = 0;

  constructor(
    private http: HttpClient,
    private articleService: Articleservice
  ) {}

  article = {
    title: '',
    category: '',
    imageUrl: '',
    content: ''
  };

  categories = ['B2B', 'Marketing', 'AI', 'Business'];

  ngOnInit(): void {
    this.getTotalArticles();
  }

  getTotalArticles() {

    fetch('https://koinetmedia-backend-61w7.onrender.com/api/getarticles')
      .then(res => res.json())
      .then(data => {

        const articles = data.content || data;
        this.totalArticles = articles.length;

      })
      .catch(err => {
        console.error('Error fetching article count:', err);
      });

  }

  submitArticle() {

    this.articleService.addArticle(this.article).subscribe({

      next: (res) => {

        alert(res.message || 'Article created successfully');

        this.article = {
          title: '',
          category: '',
          imageUrl: '',
          content: ''
        };

      },

      error: (err) => {

        console.error(err);
        alert('Article not saved');

      }

    });

  }

}