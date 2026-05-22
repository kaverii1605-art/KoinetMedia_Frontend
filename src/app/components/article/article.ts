import { Component, OnInit } from '@angular/core';
import { Articleservice } from '../../services/articleservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
       imports: [CommonModule, FormsModule,RouterModule],

  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article implements OnInit {

    articles: any[] = [];
  filteredArticles: any[] = [];

  visibleCount: number = 6;
  searchText: string = '';

  constructor(private articleService: Articleservice) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    this.articleService.getAllArticles().subscribe({
      next: (data) => {
        console.log('ARTICLES:', data);

        this.articles = data;
        this.filteredArticles = data;
      },
      error: (err) => {
        console.error('Error fetching articles', err);
      }
    });
  }

  loadMore(): void {
    this.visibleCount += 6;
  }

  searchArticles(): void {
    const text = this.searchText.toLowerCase();

    this.filteredArticles = this.articles.filter(article =>
      article.title?.toLowerCase().includes(text) ||
      article.category?.toLowerCase().includes(text)
    );
  }

}
