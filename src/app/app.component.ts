import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightTextPipe } from './highlight-text.pipe';

type Blog = {
  title: string;
  subtitle: string;
  text: string;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HighlightTextPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // Note: this blog list generated by AI.
  blogs: Blog[] = [
    {
      title: 'Understanding Angular Directives',
      subtitle: 'A deep dive into Angular directives',
      text: 'In this blog, we explore Angular directives, including structural and attribute directives. Learn how to create your own custom directives.',
    },
    {
      title: 'Getting Started with Bootstrap 5 in Angular',
      subtitle: 'Bootstrap integration guide for Angular developers',
      text: 'This blog explains how to integrate Bootstrap 5 into an Angular project, covering the installation, usage of components, and customization tips.',
    },
    {
      title: 'Mastering TypeScript with Angular',
      subtitle: 'Key TypeScript concepts for Angular',
      text: 'TypeScript is essential for Angular development. This blog post highlights key features of TypeScript and how to use them effectively in Angular projects.',
    },
    {
      title: 'RxJS Observables in Angular: A Complete Guide',
      subtitle: 'Harnessing the power of RxJS in Angular',
      text: 'Learn the power of RxJS Observables in Angular, from handling asynchronous data streams to implementing advanced operators for state management.',
    },
    {
      title: 'Building Reusable Angular Components',
      subtitle: 'Best practices for reusable components',
      text: 'Creating reusable components in Angular can save time and improve code quality. This blog walks you through best practices for building modular components.',
    },
    {
      title: 'Performance Optimization in Angular',
      subtitle: 'Strategies for optimizing Angular performance',
      text: 'Discover techniques to optimize the performance of your Angular applications, including lazy loading, change detection strategies, and AOT compilation.',
    },
    {
      title: 'Routing in Angular: A Complete Tutorial',
      subtitle: 'Comprehensive routing guide in Angular',
      text: 'Routing is a critical feature in Angular applications. This tutorial covers everything from basic routing setup to advanced features like lazy loading and guards.',
    },
    {
      title: 'How to Secure Angular Applications',
      subtitle: 'Security tips for Angular applications',
      text: 'Security is a must in modern web applications. Learn how to secure your Angular app with authentication, authorization, and best practices for safe data handling.',
    },
    {
      title: 'State Management in Angular with NgRx',
      subtitle: 'Managing application state with NgRx',
      text: 'State management is essential for handling complex applications. This blog introduces NgRx and explains how to use it for efficient state management in Angular.',
    },
    {
      title: 'Unit Testing Angular Applications with Jasmine',
      subtitle: 'How to test Angular apps with Jasmine',
      text: 'Learn how to write unit tests for your Angular applications using Jasmine and Karma. This post includes tips for writing testable code and using mocks effectively.',
    },
  ];

  filteredItems: Blog[] = [];
  allBlogs: Blog[] = [];
  searchTerm: string = '';
  listCount: number = 0;

  ngOnInit(): void {
    this.allBlogs = [...this.blogs];
  }

  filterItems() {
    let lowerSearchTerm = this.searchTerm.toLowerCase();
    this.blogs = [...this.allBlogs];
    this.filteredItems = this.blogs.filter(
      (x) =>
        lowerSearchTerm !== '' &&
        (x.title.toLowerCase().includes(lowerSearchTerm) ||
          x.text.toLowerCase().includes(lowerSearchTerm) ||
          x.subtitle.toLowerCase().includes(lowerSearchTerm))
    );
    this.listCount = this.filteredItems.length;
  }
}
