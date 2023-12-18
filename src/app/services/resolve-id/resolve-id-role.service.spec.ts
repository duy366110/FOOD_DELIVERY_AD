import { TestBed } from '@angular/core/testing';

import { ResolveIdRoleService } from './resolve-id-role.service';

describe('ResolveIdRoleService', () => {
  let service: ResolveIdRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveIdRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
