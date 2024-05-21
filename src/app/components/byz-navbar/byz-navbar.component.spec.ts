import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzNavbarComponent } from './byz-navbar.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ByzNavbarComponent', () => {
  let component: ByzNavbarComponent;
  let fixture: ComponentFixture<ByzNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzNavbarComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ByzNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
