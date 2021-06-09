import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B46000Component } from './b46000.component';

describe('B46000Component', () => {
  let component: B46000Component;
  let fixture: ComponentFixture<B46000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B46000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B46000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
