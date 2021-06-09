import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B36000k6Component } from './b36000k6.component';

describe('B36000k6Component', () => {
  let component: B36000k6Component;
  let fixture: ComponentFixture<B36000k6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B36000k6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B36000k6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
