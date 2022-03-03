import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utils} from "app/common/utils/Utils";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    //use http services always with onInit not in constructor
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }
  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';

    this.http.post<any>(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response.id;
        this.posts.splice(0, 0, post)
      });
  }

  updatePost(post: any){
    this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead:true}))
      .subscribe();
  }

  deletePost(post: any){
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response=>{
        Utils.FindAndDeleteFromArray(this.posts,post);
      })
  }

}
