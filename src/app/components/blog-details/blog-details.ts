import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {


  blog: any = null;
  blogs: any[] = [];
  currentIndex = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      console.log('ROUTE ID:', id);

      if (id) {
        this.blog = null;
        this.loadBlog(id);
        this.loadAllBlogs(id);
      }
    });
  }

  loadBlog(id: string) {
    fetch(`https://koinetmedia-backend-61w7.onrender.com/api/getblog/${id}`)
      .then(res => {
        console.log('DETAIL API STATUS:', res.status);
        return res.json();
      })
      .then(data => {
        console.log('DETAIL API DATA:', data);
        this.blog = data;
      })
      .catch(err => {
        console.log('DETAIL API ERROR:', err);
      });
  }

  loadAllBlogs(id: string) {
    fetch('https://koinetmedia-backend-61w7.onrender.com/api/getblogs')
      .then(res => res.json())
      .then(data => {
        this.blogs = data.content || data;

        this.currentIndex = this.blogs.findIndex((b: any) =>
          String(b.id || b._id) === String(id)
        );

        console.log('ALL BLOGS:', this.blogs);
        console.log('CURRENT INDEX:', this.currentIndex);
      })
      .catch(err => console.log('ALL BLOGS ERROR:', err));
  }

  prevBlog() {
    if (this.currentIndex > 0) {
      const prevBlog = this.blogs[this.currentIndex - 1];
      this.router.navigate(['/blogdetails', prevBlog.id || prevBlog._id]);
    }
  }

  nextBlog() {
    if (this.currentIndex < this.blogs.length - 1) {
      const nextBlog = this.blogs[this.currentIndex + 1];
      this.router.navigate(['/blogdetails', nextBlog.id || nextBlog._id]);
    }
  }

}
