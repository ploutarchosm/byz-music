import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzErrorComponent } from './byz-error.component';

describe('ByzErrorComponent', () => {
  let component: ByzErrorComponent;
  let fixture: ComponentFixture<ByzErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
