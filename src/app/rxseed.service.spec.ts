import { TestBed } from '@angular/core/testing';

import { RxseedService } from './rxseed.service';

describe('RxseedService', () => {
  let service: RxseedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxseedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
