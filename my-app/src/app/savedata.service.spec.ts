import { TestBed, inject } from '@angular/core/testing';

import { SavedataService } from './savedata.service';

describe('SavedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedataService]
    });
  });

  it('should be created', inject([SavedataService], (service: SavedataService) => {
    expect(service).toBeTruthy();
  }));
});
