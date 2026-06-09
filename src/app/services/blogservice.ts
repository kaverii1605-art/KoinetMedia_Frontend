import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Blog {
  id?: number;
  _id?: string;
  title: string;
  category: string;
  imageUrl: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class Blogservice {

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient) {}

  addBlog(blog: Blog): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/addblog`, blog, { headers });
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/getblogs`);
  }

  getBlogsByPage(page: number = 0, size: number = 6): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogs?page=${page}&size=${size}`);
  }

   getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/getblog/${id}`);
  }
}