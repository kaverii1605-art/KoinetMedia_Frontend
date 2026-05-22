import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountprofiling } from './accountprofiling';

describe('Accountprofiling', () => {
  let component: Accountprofiling;
  let fixture: ComponentFixture<Accountprofiling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accountprofiling],
    }).compileComponents();

    fixture = TestBed.createComponent(Accountprofiling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
