import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzPageComponent } from './byz-page.component';

describe('ByzPageComponent', () => {
  let component: ByzPageComponent;
  let fixture: ComponentFixture<ByzPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
