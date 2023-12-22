import { TestBed } from '@angular/core/testing';

import { ResolveAllCategoryService } from './resolve-all-category.service';

describe('ResolveAllCategoryService', () => {
  let service: ResolveAllCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveAllCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
