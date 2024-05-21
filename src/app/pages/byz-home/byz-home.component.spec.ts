import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzHomeComponent } from './byz-home.component';

describe('ByzHomeComponent', () => {
  let component: ByzHomeComponent;
  let fixture: ComponentFixture<ByzHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ByzHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
