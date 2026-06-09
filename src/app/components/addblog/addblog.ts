import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blogservice } from '../../services/blogservice';
import { AppRoutingModule } from "../../app-routing-module";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-addblog',
   standalone: true,
   imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './addblog.html',
  styleUrl: './addblog.css',
})
export class Addblog {
submittedBlog: any;




totalBlogs: number = 0;


    constructor(private http: HttpClient,private blogService: Blogservice, private router: Router) {}

  blog = {
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
 
    this.getTotalBlogs();
}
 

  getTotalBlogs() {
  fetch('https://koinetmedia-backend-61w7.onrender.com/api/getblogs')
    .then(res => res.json())
    .then(data => {
      const blogs = data.content || data; // supports pagination or array
      this.totalBlogs = blogs.length;
    })
    .catch(err => {
      console.error('Error fetching blog count:', err);
    });
}


logout() {

  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');

  this.router.navigate(['/login']);
}


 submitBlog() {

    console.log("TOKEN BEFORE ADD BLOG:", localStorage.getItem("token"));

  this.blogService.addBlog(this.blog).subscribe({
    next: (res) => {
      alert(res.message || 'Blog created successfully');

      this.blog = {
        title: '',
        category: '',
        imageUrl: '',
        content: ''
      };
    },
    error: (err) => {
  console.error('ADD BLOG ERROR:', err);
  alert(err.error?.message || 'Blog not saved');
}
  });
}
}
