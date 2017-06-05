import { TestBed, inject } from '@angular/core/testing';

import { GetpostserviceService } from './getpostservice.service';

describe('GetpostserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpostserviceService]
    });
  });

  it('should be created', inject([GetpostserviceService], (service: GetpostserviceService) => {
    expect(service).toBeTruthy();
  }));
});
