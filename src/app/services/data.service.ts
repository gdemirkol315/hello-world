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
export class DataService {


  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(catchError(this.handleError));
  }

  delete(resource: any) {
    return this.http.delete(this.url + '/' + resource.id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput());
    else if (error.status === 404) return throwError(new NotFoundError());
    else return throwError(new AppError(error));
  }
}
