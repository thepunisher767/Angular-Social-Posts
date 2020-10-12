import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {title: 'TestTitle1', body: 'TestBody1'},
    {title: 'TestTitle2', body: 'TestBody2'},
    {title: 'TestTitle3', body: 'TestBody3'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit = function($event) {
    this.posts.push($event);
    document.getElementById("overlay").style.display = "none"
  }

  onDelete = function($event) {
    let i: number = 0;
    for(let post of this.posts) {
      if(post.title == $event.title && post.body == $event.body){
        this.posts.splice(i, 1);
      }
      i++;
    }
  }
}

interface Post {
  title: string,
  body: string
}
