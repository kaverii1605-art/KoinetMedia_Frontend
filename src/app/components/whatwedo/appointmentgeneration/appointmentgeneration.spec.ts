import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appointmentgeneration } from './appointmentgeneration';

describe('Appointmentgeneration', () => {
  let component: Appointmentgeneration;
  let fixture: ComponentFixture<Appointmentgeneration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Appointmentgeneration],
    }).compileComponents();

    fixture = TestBed.createComponent(Appointmentgeneration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
