import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDesignationsComponent } from './available-designations.component';

describe('AvailableDesignationsComponent', () => {
  let component: AvailableDesignationsComponent;
  let fixture: ComponentFixture<AvailableDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableDesignationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
