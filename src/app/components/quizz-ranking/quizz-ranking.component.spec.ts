import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzRankingComponent } from './quizz-ranking.component';

describe('QuizzRankingComponent', () => {
  let component: QuizzRankingComponent;
  let fixture: ComponentFixture<QuizzRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
