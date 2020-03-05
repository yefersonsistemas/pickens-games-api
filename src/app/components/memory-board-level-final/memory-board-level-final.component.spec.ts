import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryBoardLevelFinalComponent } from './memory-board-level-final.component';

describe('MemoryBoardLevelFinalComponent', () => {
  let component: MemoryBoardLevelFinalComponent;
  let fixture: ComponentFixture<MemoryBoardLevelFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryBoardLevelFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryBoardLevelFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
