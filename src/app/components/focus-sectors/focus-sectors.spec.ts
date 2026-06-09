import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusSectors } from './focus-sectors';

describe('FocusSectors', () => {
  let component: FocusSectors;
  let fixture: ComponentFixture<FocusSectors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusSectors],
    }).compileComponents();

    fixture = TestBed.createComponent(FocusSectors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
