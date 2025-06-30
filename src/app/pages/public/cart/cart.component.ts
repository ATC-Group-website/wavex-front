import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  router = inject(Router);

  // Cart items array
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'WaveX Balance Board (Official)',
      price: 999.0,
      image: '/images/wavex-board.jpg',
      quantity: 3,
      category: 'Balance Board',
    },
    {
      id: 2,
      name: 'WaveX Grip Socks',
      price: 12.99,
      image: '/images/wavex-socks.jpg',
      quantity: 2,
      category: 'Socks',
    },
    {
      id: 3,
      name: 'WaveX Resistance Band',
      price: 21.99,
      image: '/images/wavex-resistance-band.jpg',
      quantity: 1,
      category: 'Resistance Band',
    },
    {
      id: 4,
      name: 'WaveX Aqua Mat Towel',
      price: 18.99,
      image: '/images/wavex-towel.jpg',
      quantity: 1,
      category: 'Towels',
    },
  ];

  // Increase item quantity
  increaseQuantity(itemId: number): void {
    const item = this.cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity++;
    }
  }

  // Decrease item quantity
  decreaseQuantity(itemId: number): void {
    const item = this.cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  // Remove item from cart
  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
  }

  // Calculate total price
  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Calculate total items count
  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Check if cart is empty
  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  // Proceed to checkout
  proceedToCheckout(): void {
    if (this.cartItems.length > 0) {
      // You can pass cart data to checkout or use a service
      console.log('Proceeding to checkout with items:', this.cartItems);
      this.router.navigate(['/checkout']);
    }
  }

  // Clear entire cart
  clearCart(): void {
    this.cartItems = [];
  }
}
