import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzTimerComponent } from './quizz-timer.component';

describe('QuizzTimerComponent', () => {
  let component: QuizzTimerComponent;
  let fixture: ComponentFixture<QuizzTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
