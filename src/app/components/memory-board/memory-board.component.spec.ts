import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBoardComponent } from './memory-board.component';

describe('MemoryBoardComponent', () => {
  let component: MemoryBoardComponent;
  let fixture: ComponentFixture<MemoryBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
