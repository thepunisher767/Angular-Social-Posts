import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  postTitle: string;
  postBody: string;
  constructor() { }

  ngOnInit(): void {
  }

newPost = function() {
  let newPost: Post = {title: this.postTitle, body: this.postBody};
  this.submitted.emit(newPost);
  this.postTitle = '';
  this.postBody = '';
}
  
}

interface Post {
  title: string,
  body: string
}