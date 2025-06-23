import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  // Payment method selection
  selectedPaymentMethod: string = '';

  // Order summary data
  orderItems = [
    { name: 'WaveX Balance Board', price: 249.0, quantity: 1 },
    { name: 'WaveX Grip Socks', price: 12.99, quantity: 2 },
    { name: 'WaveX Resistance Band', price: 21.99, quantity: 1 },
  ];

  // Calculate totals
  getSubtotal(): number {
    return this.orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTax(): number {
    return this.getSubtotal() * 0.1; // 10% tax
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }

  // Payment method selection
  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  // Process payment
  processPayment(): void {
    if (!this.selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }

    console.log('Processing payment with method:', this.selectedPaymentMethod);
    alert('Payment processing... (This is a demo)');
  }
}
