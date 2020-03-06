import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzRegisterComponent } from './quizz-register.component';

describe('QuizzRegisterComponent', () => {
  let component: QuizzRegisterComponent;
  let fixture: ComponentFixture<QuizzRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
