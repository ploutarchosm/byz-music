import { TestBed } from '@angular/core/testing';
import { ByzTitleStrategyService } from './byz-title-strategy.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { Title } from '@angular/platform-browser';

describe('ByzTitleStrategyService', () => {
  let service: ByzTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NgxsModule.forRoot([ApplicationState]),
      ],
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
