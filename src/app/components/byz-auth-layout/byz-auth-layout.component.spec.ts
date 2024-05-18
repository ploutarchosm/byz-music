import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzAuthLayoutComponent } from './byz-auth-layout.component';

describe('ByzAuthLayoutComponent', () => {
  let component: ByzAuthLayoutComponent;
  let fixture: ComponentFixture<ByzAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzAuthLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
