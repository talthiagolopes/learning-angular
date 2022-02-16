import { TestBed } from '@angular/core/testing';

import { TalksService } from './talks.service';

describe('TalksService', () => {
  let service: TalksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
