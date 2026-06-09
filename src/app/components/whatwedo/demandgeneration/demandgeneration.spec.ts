import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandgeneration } from './demandgeneration';

describe('Demandgeneration', () => {
  let component: Demandgeneration;
  let fixture: ComponentFixture<Demandgeneration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Demandgeneration],
    }).compileComponents();

    fixture = TestBed.createComponent(Demandgeneration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
