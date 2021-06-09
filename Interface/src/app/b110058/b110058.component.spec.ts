import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B110058Component } from './b110058.component';

describe('B110058Component', () => {
  let component: B110058Component;
  let fixture: ComponentFixture<B110058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B110058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B110058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
