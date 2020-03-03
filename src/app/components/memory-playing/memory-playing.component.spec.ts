import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryPlayingComponent } from './memory-playing.component';

describe('MemoryPlayingComponent', () => {
  let component: MemoryPlayingComponent;
  let fixture: ComponentFixture<MemoryPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
