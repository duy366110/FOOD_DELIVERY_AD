import { TestBed } from '@angular/core/testing';

import { ResolveIdCategoryService } from './resolve-id-category.service';

describe('ResolveIdCategoryService', () => {
  let service: ResolveIdCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveIdCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
