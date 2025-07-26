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
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: 'path/to/image.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      image: 'path/to/image.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99,
      quantity: 1,
      image: 'path/to/image.jpg'
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
