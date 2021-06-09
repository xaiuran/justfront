import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B36000k7Component } from './b36000k7.component';

describe('B36000k7Component', () => {
  let component: B36000k7Component;
  let fixture: ComponentFixture<B36000k7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B36000k7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B36000k7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
