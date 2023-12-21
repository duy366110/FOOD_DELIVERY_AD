import { TestBed } from '@angular/core/testing';

import { ResolveCategoryAmountService } from './resolve-category-amount.service';

describe('ResolveCategoryAmountService', () => {
  let service: ResolveCategoryAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveCategoryAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
