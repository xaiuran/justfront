import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadbearComponent } from './radbear.component';

describe('RadbearComponent', () => {
  let component: RadbearComponent;
  let fixture: ComponentFixture<RadbearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadbearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadbearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
