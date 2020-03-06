import { TestBed } from '@angular/core/testing';

import { QuizzQuestionService } from './quizz-question.service';

describe('QuizzQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzQuestionService = TestBed.get(QuizzQuestionService);
    expect(service).toBeTruthy();
  });
});
