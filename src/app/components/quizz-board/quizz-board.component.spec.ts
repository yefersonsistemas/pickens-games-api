import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzBoardComponent } from './quizz-board.component';

describe('QuizzBoardComponent', () => {
  let component: QuizzBoardComponent;
  let fixture: ComponentFixture<QuizzBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
