import {Component, OnInit} from '@angular/core';
import {GitFollowersService} from "../git-followers.service";
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Observable, map, switchMap} from 'rxjs';

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {

  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GitFollowersService) {
  }

  ngOnInit(): void {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap])
      .pipe(
        switchMap(combine => {
          //this part is for using queries on page dynamically
          //(there should be also service part which uses below queries)
          //i.e. this.service.getAll(paramsResult, queryResult);
          const paramsResult = combine[0].get('...');
          const queryResult = combine[1].get('...');
          return this.service.getAll();
        })
      )
      .subscribe(followers => (this.followers = followers));
  }

}
