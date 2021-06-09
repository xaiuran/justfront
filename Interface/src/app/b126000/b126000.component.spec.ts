import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B126000Component } from './b126000.component';

describe('B126000Component', () => {
  let component: B126000Component;
  let fixture: ComponentFixture<B126000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B126000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B126000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
