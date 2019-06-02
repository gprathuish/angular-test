import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SharedService],
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
