import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B310058Component } from './b310058.component';

describe('B310058Component', () => {
  let component: B310058Component;
  let fixture: ComponentFixture<B310058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B310058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B310058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
