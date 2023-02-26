import { TestBed } from '@angular/core/testing';

import { RequestsearchService } from './requestsearch.service';

describe('RequestsearchService', () => {
  let service: RequestsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
