import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRankingComponent } from './memory-ranking.component';

describe('MemoryRankingComponent', () => {
  let component: MemoryRankingComponent;
  let fixture: ComponentFixture<MemoryRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
