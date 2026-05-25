import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


declare var bootstrap: any;


@Component({
  selector: 'app-mediakit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mediakit.html',
  styleUrl: './mediakit.css',
})
export class Mediakit {

  
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  openModal() {
    const modalElement = document.getElementById('welcomeModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  closeModal() {
    const modalElement = document.getElementById('welcomeModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }

  submitForm() {
    fetch('https://formspree.io/f/mlgvwkva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        form_type: 'Media Kit Download'
      })
    }).then(() => {
      window.open('assets/pdf/dummy-pdf_2.pdf', '_blank');
      this.closeModal();
    });
  }
}
