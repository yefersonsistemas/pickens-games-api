import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactocBoardComponent } from './tictactoc-board.component';

describe('TictactocBoardComponent', () => {
  let component: TictactocBoardComponent;
  let fixture: ComponentFixture<TictactocBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactocBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactocBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
