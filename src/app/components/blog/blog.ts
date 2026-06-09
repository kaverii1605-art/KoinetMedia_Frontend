import { Component, OnInit } from '@angular/core';
import { Blog, Blogservice } from '../../services/blogservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];

  visibleCount: number = 7;
  searchText: string = '';

  constructor(private blogService: Blogservice) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {

    this.blogService.getAllBlogs().subscribe({

      next: (data) => {
        console.log('BLOGS:', data);

        this.blogs = data;
        this.filteredBlogs = data;
      },

      error: (err) => {
        console.error('Error fetching blogs', err);
      }

    });
  }

  loadMore(): void {
    this.visibleCount += 6;
  }

  searchBlogs(): void {

    this.filteredBlogs = this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      blog.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}