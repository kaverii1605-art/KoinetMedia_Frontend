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


  blog: any = {};

    currentIndex = 0;
  blogs: any[] = [];


  constructor(private route: ActivatedRoute,private router: Router) {}
  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  fetch('https://koinetmedia-backend-61w7.onrender.com/api/getblogs')
    .then(res => res.json())
    .then(data => {
      this.blogs = data.content || data;

      this.currentIndex = this.blogs.findIndex(
        (b: any) => b.id == id
      );

      this.loadBlog(id);
    })
    .catch(err => console.log(err));
}

 prevBlog() {

    if (this.currentIndex > 0) {

      this.currentIndex--;

      const prevId = this.blogs[this.currentIndex].id;

      this.router.navigate(['/blogdetails', prevId]);

      this.loadBlog(prevId);

    }

  }

  nextBlog() {

    if (this.currentIndex < this.blogs.length - 1) {

      this.currentIndex++;

      const nextId = this.blogs[this.currentIndex].id;

      this.router.navigate(['/blogdetails', nextId]);

      this.loadBlog(nextId);

    }

  }

   loadBlog(id: any) {

    fetch(`https://koinetmedia-backend-61w7.onrender.com/api/getblog/${id}`)
      .then(res => res.json())
      .then(data => {

        this.blog = data;

      });

  }

}
