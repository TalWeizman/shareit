import { TestBed, inject } from '@angular/core/testing';

import { AfServiceService } from './af-service.service';

describe('AfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfServiceService]
    });
  });

  it('should be created', inject([AfServiceService], (service: AfServiceService) => {
    expect(service).toBeTruthy();
  }));
});
