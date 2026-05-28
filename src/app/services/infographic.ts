import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Infographic {

   id?: number;
  title: string | undefined;
  description?: string;
  shortDescription?: string;
  content?: string;
  imageUrl?: string;
  image?: string;
  date?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfographicService {

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient) {}

  addInfo(info: Infographic): Observable<any> {
    return this.http.post(`${this.apiUrl}/addinfo`, info);
  }

  getAllInfo(): Observable<Infographic[]> {
    return this.http.get<Infographic[]>(`${this.apiUrl}/getinfo`);
  }

  getInfoByPage(page: number = 1, size: number = 6): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/info?page=${page}&size=${size}`);
  }

   getInfoById(id: string): Observable<Infographic> {
      return this.http.get<Infographic>(`${this.apiUrl}/getinfo/${id}`);
    }

}
