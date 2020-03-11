import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzInstructionComponent } from './quizz-instruction.component';

describe('QuizzInstructionComponent', () => {
  let component: QuizzInstructionComponent;
  let fixture: ComponentFixture<QuizzInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
