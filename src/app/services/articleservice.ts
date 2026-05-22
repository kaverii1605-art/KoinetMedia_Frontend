import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Article {
  id?: number;
  title: string;
  category: string;
  imageUrl: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class Articleservice {

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient) {}

  addArticle(article: Article): Observable<any> {
    return this.http.post(`${this.apiUrl}/addarticle`, article);
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/getarticles`);
  }

  getArticlesByPage(page: number = 0, size: number = 6): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/articles?page=${page}&size=${size}`
    );
  }

}