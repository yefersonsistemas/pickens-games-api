import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryButtonExitComponent } from './memory-button-exit.component';

describe('MemoryButtonExitComponent', () => {
  let component: MemoryButtonExitComponent;
  let fixture: ComponentFixture<MemoryButtonExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryButtonExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryButtonExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
