import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gdpr } from './gdpr';

describe('Gdpr', () => {
  let component: Gdpr;
  let fixture: ComponentFixture<Gdpr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gdpr],
    }).compileComponents();

    fixture = TestBed.createComponent(Gdpr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
