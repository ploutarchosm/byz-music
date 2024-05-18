import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzBodyComponent } from './byz-body.component';

describe('ByzBodyComponent', () => {
  let component: ByzBodyComponent;
  let fixture: ComponentFixture<ByzBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
