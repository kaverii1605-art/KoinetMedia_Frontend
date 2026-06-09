import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentsyndication } from './contentsyndication';

describe('Contentsyndication', () => {
  let component: Contentsyndication;
  let fixture: ComponentFixture<Contentsyndication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentsyndication],
    }).compileComponents();

    fixture = TestBed.createComponent(Contentsyndication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
