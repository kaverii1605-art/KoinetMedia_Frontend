import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addinfographics } from './addinfographics';

describe('Addinfographics', () => {
  let component: Addinfographics;
  let fixture: ComponentFixture<Addinfographics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addinfographics],
    }).compileComponents();

    fixture = TestBed.createComponent(Addinfographics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
