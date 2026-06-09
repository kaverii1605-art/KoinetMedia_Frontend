import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casetudies } from './casetudies';

describe('Casetudies', () => {
  let component: Casetudies;
  let fixture: ComponentFixture<Casetudies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Casetudies],
    }).compileComponents();

    fixture = TestBed.createComponent(Casetudies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
