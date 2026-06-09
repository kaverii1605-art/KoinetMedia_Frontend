import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multichannelleads } from './multichannelleads';

describe('Multichannelleads', () => {
  let component: Multichannelleads;
  let fixture: ComponentFixture<Multichannelleads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multichannelleads],
    }).compileComponents();

    fixture = TestBed.createComponent(Multichannelleads);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
