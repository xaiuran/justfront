import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B8995Component } from './b8995.component';

describe('B8995Component', () => {
  let component: B8995Component;
  let fixture: ComponentFixture<B8995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B8995Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B8995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
