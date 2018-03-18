import { TestBed, inject } from '@angular/core/testing';

import { HackathonService } from './hackathon.service';

describe('HackathonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackathonService]
    });
  });

  it('should be created', inject([HackathonService], (service: HackathonService) => {
    expect(service).toBeTruthy();
  }));
});
