import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzEditorComponent } from './byz-editor.component';

describe('ByzEditorComponent', () => {
  let component: ByzEditorComponent;
  let fixture: ComponentFixture<ByzEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByzEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByzEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
