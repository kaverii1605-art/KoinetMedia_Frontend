import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountbasedmarketing } from './accountbasedmarketing';

describe('Accountbasedmarketing', () => {
  let component: Accountbasedmarketing;
  let fixture: ComponentFixture<Accountbasedmarketing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accountbasedmarketing],
    }).compileComponents();

    fixture = TestBed.createComponent(Accountbasedmarketing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
