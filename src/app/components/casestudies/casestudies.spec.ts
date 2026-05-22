import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casestudies } from './casestudies';

describe('Casestudies', () => {
  let component: Casestudies;
  let fixture: ComponentFixture<Casestudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Casestudies],
    }).compileComponents();

    fixture = TestBed.createComponent(Casestudies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
