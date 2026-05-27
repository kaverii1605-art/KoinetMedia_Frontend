import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../components/contact/contact';


export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Contactservice {

  private apiUrl = 'https://koinetmedia-backend-61w7.onrender.com/api';

  constructor(private http: HttpClient) {}


postContact(contact: ContactFormData): Observable<any> {
  return this.http.post(`${this.apiUrl}/postContact`, contact);
}
}
