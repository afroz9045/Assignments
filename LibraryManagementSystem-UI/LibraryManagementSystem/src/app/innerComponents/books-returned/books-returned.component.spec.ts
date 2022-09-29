import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReturnedComponent } from './books-returned.component';

describe('BooksReturnedComponent', () => {
  let component: BooksReturnedComponent;
  let fixture: ComponentFixture<BooksReturnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksReturnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
