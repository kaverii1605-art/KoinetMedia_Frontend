import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addarticle } from './addarticle';

describe('Addarticle', () => {
  let component: Addarticle;
  let fixture: ComponentFixture<Addarticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addarticle],
    }).compileComponents();

    fixture = TestBed.createComponent(Addarticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
