import {Component, OnInit} from '@angular/core';
import {Utils} from "app/common/utils/utils";
import {PostService} from "../services/post.service";
import {AppError} from "../common/validators/app-error";
import {NotFoundError} from "../common/validators/not-found-error";
import {BadInput} from "../common/validators/bad-input";

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
    this.service.getAll()
      .subscribe(post => this.posts = post);
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe((response: AppError) => {
        post.id = 1 //response.id fails;
        this.posts.splice(0, 0, post)
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          //this.form.setErrors(error.originalError)
        } else throw error;
      });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(response => {
        },
        (error: AppError) => {
          throw error;
        });
  }

  deletePost(post: any) {
    this.service.delete(post)
      .subscribe(() => Utils.FindAndDeleteFromArray(this.posts, post),
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted!')
          } else throw error;
        })
  }

}
