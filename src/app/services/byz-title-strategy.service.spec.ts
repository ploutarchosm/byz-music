import { TestBed } from '@angular/core/testing';
import { ByzTitleStrategyService } from './byz-title-strategy.service';
import { Title } from '@angular/platform-browser';

describe('ByzTitleStrategyService', () => {
  let service: ByzTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Title,
        {
          provide: ByzTitleStrategyService,
          useValue: {
            buildTitle() {
              return jest.fn();
            },
            updateTitle() {},
          },
        },
      ],
    });

    service = TestBed.inject(ByzTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
