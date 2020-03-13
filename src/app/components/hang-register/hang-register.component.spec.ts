import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangRegisterComponent } from './hang-register.component';

describe('HangRegisterComponent', () => {
  let component: HangRegisterComponent;
  let fixture: ComponentFixture<HangRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
