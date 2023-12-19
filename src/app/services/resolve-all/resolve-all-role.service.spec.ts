import { TestBed } from '@angular/core/testing';

import { ResolveAllRoleService } from './resolve-all-role.service';

describe('ResolveAllRoleService', () => {
  let service: ResolveAllRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveAllRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
