import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzMainLayoutComponent } from './byz-main-layout.component';
import { ByzBodyComponent } from '@components/byz-body/byz-body.component';
import { ByzNavbarComponent } from '@components/byz-navbar/byz-navbar.component';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from '@store/state';
import { TranslateModule } from '@ngx-translate/core';

describe('ByzMainLayoutComponent', () => {
  let component: ByzMainLayoutComponent;
  let fixture: ComponentFixture<ByzMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NgxsModule.forRoot([ApplicationState]),
        ByzMainLayoutComponent,
        ByzBodyComponent,
        ByzNavbarComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ByzMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
