import { TestBed } from '@angular/core/testing';

import { MemoryRankingService } from './memory-ranking.service';

describe('MemoryRankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryRankingService = TestBed.get(MemoryRankingService);
    expect(service).toBeTruthy();
  });
});
