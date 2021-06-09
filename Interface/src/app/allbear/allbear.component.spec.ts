import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbearComponent } from './allbear.component';

describe('AllbearComponent', () => {
  let component: AllbearComponent;
  let fixture: ComponentFixture<AllbearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
