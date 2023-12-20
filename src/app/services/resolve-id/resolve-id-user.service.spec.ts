import { TestBed } from '@angular/core/testing';

import { ResolveIdUserService } from './resolve-id-user.service';

describe('ResolveIdUserService', () => {
  let service: ResolveIdUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveIdUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
