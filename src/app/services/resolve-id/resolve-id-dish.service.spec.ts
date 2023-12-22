import { TestBed } from '@angular/core/testing';

import { ResolveIdDishService } from './resolve-id-dish.service';

describe('ResolveIdDishService', () => {
  let service: ResolveIdDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveIdDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
