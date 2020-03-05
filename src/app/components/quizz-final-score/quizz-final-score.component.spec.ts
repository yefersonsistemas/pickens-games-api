import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzFinalScoreComponent } from './quizz-final-score.component';

describe('QuizzFinalScoreComponent', () => {
  let component: QuizzFinalScoreComponent;
  let fixture: ComponentFixture<QuizzFinalScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzFinalScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzFinalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
