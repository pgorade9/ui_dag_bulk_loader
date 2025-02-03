import { TestBed } from '@angular/core/testing';

import { LoadtestApiService } from './loadtest-api.service';

describe('LoadtestApiService', () => {
  let service: LoadtestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadtestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
