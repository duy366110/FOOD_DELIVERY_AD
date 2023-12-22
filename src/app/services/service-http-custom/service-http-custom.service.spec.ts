import { TestBed } from '@angular/core/testing';

import { ServiceHttpCustomService } from './service-http-custom.service';

describe('ServiceHttpCustomService', () => {
  let service: ServiceHttpCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHttpCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
