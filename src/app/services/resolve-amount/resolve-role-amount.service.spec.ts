import { TestBed } from '@angular/core/testing';

import { ResolveRoleAmountService } from './resolve-role-amount.service';

describe('ResolveRoleAmountService', () => {
  let service: ResolveRoleAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveRoleAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
