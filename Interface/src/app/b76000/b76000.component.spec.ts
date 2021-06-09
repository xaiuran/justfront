import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B76000Component } from './b76000.component';

describe('B76000Component', () => {
  let component: B76000Component;
  let fixture: ComponentFixture<B76000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B76000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B76000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
