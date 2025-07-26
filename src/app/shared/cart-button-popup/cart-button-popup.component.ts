import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-button-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-button-popup.component.html',
  styleUrl: './cart-button-popup.component.scss'
})
export class CartButtonPopupComponent {
  public items: number = 1;
  public price: number = 89500;
  public isOpen = false;
  public cartItems: any[] = [
    // Sample data - replace with your actual cart items
    {
      id: 1,
      name: 'Product 1 Haier HSU-24IntelliCool (UVC',
      price: 29.99,
      quantity: 1,
      image: 'https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/w020250413797128143844-1200-eb96.webp?resolution=1200_1200'
    },
    {
      id: 2,
      name: 'Product 2 Haier HSU-24IntelliCool (UVC',
      price: 29.99,
      quantity: 1,
      image: 'https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/w020250311577757343226-1200-10b11.webp?resolution=1200_1200'
    },
    {
      id: 3,
      name: 'Product 3 Haier HSU-24IntelliCool (UVC',
      price: 29.99,
      quantity: 1,
      image: 'https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/578tbg-1-33c10.webp?resolution=1632_2449'
    },
    {
      id: 3,
      name: 'Product 3 Haier HSU-24IntelliCool (UVC',
      price: 29.99,
      quantity: 1,
      image: 'https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/578tbg-1-33c10.webp?resolution=1632_2449'
    },
    {
      id: 3,
      name: 'Product 3 Haier HSU-24IntelliCool (UVC',
      price: 29.99,
      quantity: 1,
      image: 'https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/578tbg-1-33c10.webp?resolution=1632_2449'
    }
  ];

  public closeCart() {
    this.isOpen = false;
  }

  public increaseQuantity(item: any) {
    item.quantity++;
  }

  public decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  public removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  public calculateSubtotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

}
