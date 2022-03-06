import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import {throwError} from "rxjs";
import {AppError} from "../common/validators/app-error";
import {NotFoundError} from "../common/validators/not-found-error";
import {BadInput} from "../common/validators/bad-input";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  createPosts(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }

  updatePosts(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .pipe(catchError(this.handleError));
  }

  deletePosts(post: any) {
    return this.http.delete(this.url + '/' + post.id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput());
    else if (error.status === 404) return throwError(new NotFoundError());
    else return throwError(new AppError(error));
  }
}
