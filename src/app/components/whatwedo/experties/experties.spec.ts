import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experties } from './experties';

describe('Experties', () => {
  let component: Experties;
  let fixture: ComponentFixture<Experties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experties],
    }).compileComponents();

    fixture = TestBed.createComponent(Experties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
