import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableStaffsComponent } from './available-staffs.component';

describe('AvailableStaffsComponent', () => {
  let component: AvailableStaffsComponent;
  let fixture: ComponentFixture<AvailableStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
