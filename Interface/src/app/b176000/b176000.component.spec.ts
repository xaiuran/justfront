import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B176000Component } from './b176000.component';

describe('B176000Component', () => {
  let component: B176000Component;
  let fixture: ComponentFixture<B176000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B176000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B176000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
