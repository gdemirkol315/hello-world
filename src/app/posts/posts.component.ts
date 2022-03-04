import {Component, OnInit} from '@angular/core';
import {Utils} from "app/common/utils/utils";
import {PostService} from "../services/post.service";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    //use http services always with onInit not in constructor
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      })
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.id;
        this.posts.splice(0, 0, post)
      });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe();
  }

  deletePost(post: any) {
    this.service.deletePost(post)
      .subscribe(response => {
        Utils.FindAndDeleteFromArray(this.posts, post);
      })
  }

}
