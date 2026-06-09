import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAppendAndCleansing } from './data-append-and-cleansing';

describe('DataAppendAndCleansing', () => {
  let component: DataAppendAndCleansing;
  let fixture: ComponentFixture<DataAppendAndCleansing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataAppendAndCleansing],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAppendAndCleansing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
