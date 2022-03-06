import {Component, OnInit} from '@angular/core';
import {GitFollowersService} from "../git-followers.service";

@Component({
  selector: 'git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {

  followers: any;

  constructor(private service: GitFollowersService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
