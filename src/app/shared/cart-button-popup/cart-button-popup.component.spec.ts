import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonPopupComponent } from './cart-button-popup.component';

describe('CartButtonPopupComponent', () => {
  let component: CartButtonPopupComponent;
  let fixture: ComponentFixture<CartButtonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButtonPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartButtonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
