import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infographic } from './infographic';

describe('Infographic', () => {
  let component: Infographic;
  let fixture: ComponentFixture<Infographic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Infographic],
    }).compileComponents();

    fixture = TestBed.createComponent(Infographic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
