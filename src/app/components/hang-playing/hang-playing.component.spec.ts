import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangPlayingComponent } from './hang-playing.component';

describe('HangPlayingComponent', () => {
  let component: HangPlayingComponent;
  let fixture: ComponentFixture<HangPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
