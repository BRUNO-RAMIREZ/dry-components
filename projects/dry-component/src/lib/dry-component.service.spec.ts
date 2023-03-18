import { TestBed } from '@angular/core/testing';

import { DryComponentService } from './dry-component.service';

describe('DryComponentService', () => {
  let service: DryComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DryComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
