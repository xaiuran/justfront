import { ComponentFixture, TestBed } from '@angular/core/testing';

import { b8000nComponent } from './b8000n.component';

describe('b8000nComponent', () => {
  let component: b8000nComponent;
  let fixture: ComponentFixture<b8000nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ b8000nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(b8000nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
