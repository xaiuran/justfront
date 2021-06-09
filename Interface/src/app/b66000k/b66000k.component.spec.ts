import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B66000kComponent } from './b66000k.component';

describe('B66000kComponent', () => {
  let component: B66000kComponent;
  let fixture: ComponentFixture<B66000kComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B66000kComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B66000kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
