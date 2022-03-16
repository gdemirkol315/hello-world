import {Component, OnInit} from '@angular/core';
import {GitFollowersService} from "../git-followers.service";
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Observable} from 'rxjs';

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
      .subscribe(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        // we could get use id, page in service to filter
        // i.e. this.service.getAll({id: id, page: page})
        this.service.getAll()
          .subscribe(followers => this.followers = followers);
      });


  }

}
