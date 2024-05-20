import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzMainLayoutComponent } from './byz-main-layout.component';

describe('ByzMainLayoutComponent', () => {
  let component: ByzMainLayoutComponent;
  let fixture: ComponentFixture<ByzMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzMainLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ByzMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
