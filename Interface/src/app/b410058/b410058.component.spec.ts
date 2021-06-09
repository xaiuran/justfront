import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B410058Component } from './b410058.component';

describe('B410058Component', () => {
  let component: B410058Component;
  let fixture: ComponentFixture<B410058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B410058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B410058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
