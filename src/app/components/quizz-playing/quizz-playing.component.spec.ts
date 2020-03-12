import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzPlayingComponent } from './quizz-playing.component';

describe('QuizzPlayingComponent', () => {
  let component: QuizzPlayingComponent;
  let fixture: ComponentFixture<QuizzPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
