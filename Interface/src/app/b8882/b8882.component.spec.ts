import { ComponentFixture, TestBed } from '@angular/core/testing';

import { b8882Component } from './b8882.component';

describe('B8882Component', () => {
  let component: b8882Component;
  let fixture: ComponentFixture<b8882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ b8882Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(b8882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
