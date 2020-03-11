import { TestBed } from '@angular/core/testing';

import { QuizzTimerService } from './quizz-timer.service';

describe('QuizzTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzTimerService = TestBed.get(QuizzTimerService);
    expect(service).toBeTruthy();
  });
});
