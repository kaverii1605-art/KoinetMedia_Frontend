import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InfographicService } from '../../services/infographic';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addinfographics',
  standalone: true,
     imports: [CommonModule, FormsModule,RouterModule],

  templateUrl: './addinfographics.html',
  styleUrl: './addinfographics.css',
})
export class Addinfographics {

  submittedInfographic: any;




totalInfographics: number = 0;


    constructor(private http: HttpClient,private infoservice: InfographicService, private router: Router) {}

  infographic = {
    title: '',
    category: '',
    imageUrl: '',
    content: ''
  };

  categories = ['B2B', 'Marketing', 'AI', 'Business'];

 ngOnInit(): void {

    const token = localStorage.getItem('token');

  if (!token) {
    alert('Please login first');
    window.location.href = '/login';
    return;
  }
 
    this.getTotalInfographics();
}
 

  getTotalInfographics() {
  fetch('https://koinetmedia-backend-61w7.onrender.com/api/getinfo')
    .then(res => res.json())
    .then(data => {
      const infographics = data.content || data; // supports pagination or array
      this.totalInfographics = infographics.length;
    })
    .catch(err => {
      console.error('Error fetching infographic count:', err);
    });
}


logout() {

  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');

  this.router.navigate(['/login']);
}


 submitInfographic() {

    console.log("TOKEN BEFORE ADD INFOPGRAPHIC:", localStorage.getItem("token"));

  this.infoservice.addInfo(this.infographic).subscribe({
    next: (res) => {
      alert(res.message || 'Infographic created successfully');

      this.infographic = {
        title: '',
        category: '',
        imageUrl: '',
        content: ''
      };
    },
    error: (err) => {
  console.error('ADD INFOPGRAPHIC ERROR:', err);
  alert(err.error?.message || 'Infographic not saved');
}
  });
}
}
