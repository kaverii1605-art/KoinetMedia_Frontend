import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediakit } from './mediakit';

describe('Mediakit', () => {
  let component: Mediakit;
  let fixture: ComponentFixture<Mediakit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mediakit],
    }).compileComponents();

    fixture = TestBed.createComponent(Mediakit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
