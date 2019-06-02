import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SharedService, GitHubUser } from './shared.service';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SharedService],
    imports: [HttpClientTestingModule]
  }));

  function setup() {
    const sharedService = TestBed.get(SharedService);
    const httpTestingController = TestBed.get(HttpTestingController);

    return { sharedService, httpTestingController };
  }

  it('should be created', () => {
    const { sharedService } = setup();
    expect(sharedService).toBeTruthy();
  });

  it('should get GIT hub data', () => {
    const { sharedService, httpTestingController } = setup();
    const mockData: GitHubUser = { id: 123, name: 'Prathuish', login: 'gprathuish'};
    const keyword = 'gprathuish'

    sharedService.getGitHubData(keyword).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${keyword}`);

    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });


  afterEach(()=> {
    const {httpTestingController} = setup();
    httpTestingController.verify();
  });
});
