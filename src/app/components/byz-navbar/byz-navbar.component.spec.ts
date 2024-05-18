import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzNavbarComponent } from './byz-navbar.component';

describe('ByzNavbarComponent', () => {
  let component: ByzNavbarComponent;
  let fixture: ComponentFixture<ByzNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
