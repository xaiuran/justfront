import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B210058Component } from './b210058.component';

describe('B210058Component', () => {
  let component: B210058Component;
  let fixture: ComponentFixture<B210058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B210058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B210058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
