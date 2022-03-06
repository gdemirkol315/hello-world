import {Injectable} from '@angular/core';
import {DataService} from "./services/data.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GitFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/gdemirkol315/followers', http);
  }
}
