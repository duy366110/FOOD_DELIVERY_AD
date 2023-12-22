import { TestBed } from '@angular/core/testing';

import { ResolveDishAmountService } from './resolve-dish-amount.service';

describe('ResolveDishAmountService', () => {
  let service: ResolveDishAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveDishAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
