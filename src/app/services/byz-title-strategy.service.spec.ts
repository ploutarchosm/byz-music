import { TestBed } from '@angular/core/testing';

import { ByzTitleStrategyService } from './byz-title-strategy.service';

describe('ByzTitleStrategyService', () => {
  let service: ByzTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByzTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
