import { TestBed } from '@angular/core/testing';

import { SimlationService } from './simlation.service';

describe('SimlationService', () => {
  let service: SimlationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimlationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
