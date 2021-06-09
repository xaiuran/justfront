import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B36000Component } from './b36000.component';

describe('B36000Component', () => {
  let component: B36000Component;
  let fixture: ComponentFixture<B36000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B36000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B36000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
