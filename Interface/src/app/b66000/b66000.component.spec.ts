import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B66000Component } from './b66000.component';

describe('B66000Component', () => {
  let component: B66000Component;
  let fixture: ComponentFixture<B66000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B66000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B66000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
