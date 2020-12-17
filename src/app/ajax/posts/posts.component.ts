import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[];
  form: FormGroup;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      userId: '',
      title: '',
      body: '',
    });
  }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(): void {
    this.posts = [];
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((r) => {
        this.posts = r as any[];
      });
  }

  addPost(): void {
    const newPost = this.form.value;
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe((r) => {
        this.form.reset();
        console.log('add post success!');
        this.loadPost();
      });
  }
}
