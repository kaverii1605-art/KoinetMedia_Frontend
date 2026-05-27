import { Component } from '@angular/core';
import { ContactFormData, Contactservice } from '../../services/contactservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [CommonModule ,FormsModule],

  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

   contactData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
};

  constructor(private contactService: Contactservice) {}

  submitForm() {

    this.contactService.postContact(this.contactData).subscribe({

      next: (response) => {
        console.log(response);

        alert('Contact form submitted successfully');

        this.contactData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        };

        console.log('Form reset:', this.contactData);
      },

      error: (error) => {
        console.error(error);
        alert('Something went wrong');
      }

    });
  }

}
