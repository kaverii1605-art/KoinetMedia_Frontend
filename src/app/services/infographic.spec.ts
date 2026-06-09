import { TestBed } from '@angular/core/testing';

import { Infographic } from './infographic';

describe('Infographic', () => {
  let service: Infographic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Infographic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
