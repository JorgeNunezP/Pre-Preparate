import { TestBed } from '@angular/core/testing';

import { NewSubService } from './new-sub.service';

describe('NewSubService', () => {
  let service: NewSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
