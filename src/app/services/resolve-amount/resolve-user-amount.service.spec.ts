import { TestBed } from '@angular/core/testing';

import { ResolveUserAmountService } from './resolve-user-amount.service';

describe('ResolveUserAmountService', () => {
  let service: ResolveUserAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveUserAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
