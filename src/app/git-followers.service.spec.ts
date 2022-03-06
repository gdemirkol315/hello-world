import { TestBed } from '@angular/core/testing';

import { GitFollowersService } from './git-followers.service';

describe('GitFollowersService', () => {
  let service: GitFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
