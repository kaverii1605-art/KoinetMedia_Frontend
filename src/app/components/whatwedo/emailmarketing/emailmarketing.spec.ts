import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailmarketing } from './emailmarketing';

describe('Emailmarketing', () => {
  let component: Emailmarketing;
  let fixture: ComponentFixture<Emailmarketing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emailmarketing],
    }).compileComponents();

    fixture = TestBed.createComponent(Emailmarketing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
