import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B116000Component } from './b116000.component';

describe('B116000Component', () => {
  let component: B116000Component;
  let fixture: ComponentFixture<B116000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B116000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B116000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
