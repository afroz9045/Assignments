import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyCheckComponent } from './penalty-check.component';

describe('PenaltyCheckComponent', () => {
  let component: PenaltyCheckComponent;
  let fixture: ComponentFixture<PenaltyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
