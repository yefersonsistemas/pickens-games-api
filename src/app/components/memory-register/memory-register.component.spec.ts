import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRegisterComponent } from './memory-register.component';

describe('MemoryRegisterComponent', () => {
  let component: MemoryRegisterComponent;
  let fixture: ComponentFixture<MemoryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
