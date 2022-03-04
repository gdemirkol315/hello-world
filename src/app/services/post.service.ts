import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post<any>(this.url, JSON.stringify(post))
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  }

  deletePost(post: any) {
    return this.http.delete(this.url + '/' + post.id)
  }

}
