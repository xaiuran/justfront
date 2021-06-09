import { ComponentFixture, TestBed } from '@angular/core/testing';

import { b29241Component } from './b29241.component';

describe('B29241Component', () => {
  let component: b29241Component;
  let fixture: ComponentFixture<b29241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ b29241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(b29241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
