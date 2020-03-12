import { TestBed } from '@angular/core/testing';

import { MemoryCurrentPlayerService } from './memory-current-player.service';

describe('MemoryCurrentPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryCurrentPlayerService = TestBed.get(MemoryCurrentPlayerService);
    expect(service).toBeTruthy();
  });
});
