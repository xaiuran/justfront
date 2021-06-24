import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B36000kComponent } from './b36000k.component';

describe('B36000kComponent', () => {
  let component: B36000kComponent;
  let fixture: ComponentFixture<B36000kComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B36000kComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B36000kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
