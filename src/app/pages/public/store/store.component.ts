import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface FilterCategory {
  name: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-store',
  imports: [CommonModule, FormsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  // Product data
  allProducts: Product[] = [
    {
      id: 1,
      name: 'WaveX Balance Board (Official)',
      price: 999.0,
      image: '/images/wavex-board.jpg',
      category: 'Balance Board',
      description: 'Core product, premium material',
    },
    {
      id: 2,
      name: 'Anti slip Yoga mat',
      price: 21.99,
      image: '/images/wavex-anti-slip-mat.jpg',
      category: 'Yoga Accessories',
      description: 'Non-slip surface for enhanced stability',
    },
    {
      id: 3,
      name: 'Wavex exercise set',
      price: 34.99,
      image: '/images/wavex-training-set.jpg',
      category: 'Yoga Accessories',
      description:
        'Complete workout outfit including comfortable top and bottom designed for optimal performance and flexibility during training sessions.',
    },
    {
      id: 4,
      name: 'WaveX Grip Socks',
      price: 12.99,
      image: '/images/temp-2.png',
      category: 'Socks',
      description: 'Entry-level, good for impulse buys',
    },
    {
      id: 5,
      name: 'WaveX Resistance Band Set',
      price: 21.99,
      image: '/images/temp-3.png',
      category: 'Resistance Band Set',
      description: '3 bands + pouch',
    },
    {
      id: 6,
      name: 'WaveX Aqua Mat Towel',
      price: 18.99,
      image: '/images/wavex-towel.jpg',
      category: 'Towels',
      description: 'Performance microfiber',
    },
    {
      id: 7,
      name: 'Wavex tote bag',
      price: 19.99,
      image: '/images/wavex-backpack.jpg',
      category: 'Bags',
      description: 'Durable, branded',
    },
    {
      id: 8,
      name: 'WaveX Insulated Bottle',
      price: 22.99,
      image: '/images/wavex-bottle.jpg',
      category: 'bottles',
      description: 'High-perceived value',
    },
    {
      id: 9,
      name: 'WaveX Apparel Shirt',
      price: 14.99,
      image: '/images/wavex-shirt.jpg',
      category: 'Apparel Collection',
      description: 'Premium performance shirt',
    },
    {
      id: 10,
      name: 'WaveX Apparel Leggings',
      price: 29.99,
      image: '/images/temp-2.png',
      category: 'Apparel Collection',
      description: 'High-performance training leggings',
    },
    // {
    //   id: 11,
    //   name: 'WaveX Apparel Premium Shirt',
    //   price: 34.99,
    //   image: '/images/temp-3.png',
    //   category: 'Apparel Collection',
    //   description: 'Premium style variant',
    // },
    {
      id: 11,
      name: 'WaveX Hoodie - Unstoppable',
      price: 39.99,
      image: '/images/temp.png',
      category: 'Apparel Collection',
      description: 'Premium item, limited edition option',
    },
    {
      id: 12,
      name: 'WaveX On-Demand Class Pack',
      price: 14.99,
      image: '/images/temp-2.png',
      category: 'Digital Products',
      description: '5-class video series',
    },
    {
      id: 13,
      name: 'Training Program PDF Bundle',
      price: 9.99,
      image: '/images/temp-3.png',
      category: 'Digital Products',
      description: 'Low-cost upsell, digital',
    },
  ];

  // Filter categories
  filterCategories: FilterCategory[] = [
    { name: 'All Products', value: 'all', icon: 'fas fa-circle' },
    { name: 'Balance Board', value: 'Balance Board', icon: 'fas fa-circle' },
    { name: 'Socks', value: 'Socks', icon: 'fas fa-circle' },
    {
      name: 'Resistance Band Set',
      value: 'Resistance Band Set',
      icon: 'fas fa-circle',
    },
    { name: 'Towels', value: 'Towels', icon: 'fas fa-circle' },
    { name: 'Bags', value: 'Bags', icon: 'fas fa-circle' },
    { name: 'Bottles', value: 'bottles', icon: 'fas fa-circle' },
    {
      name: 'Apparel Collection',
      value: 'Apparel Collection',
      icon: 'fas fa-circle',
    },
    {
      name: 'Digital Products',
      value: 'Digital Products',
      icon: 'fas fa-circle',
    },
    {
      name: 'Yoga Accessories',
      value: 'Yoga Accessories',
      icon: 'fas fa-circle',
    },
  ];

  // State variables
  filteredProducts: Product[] = [];
  currentFilter: string = 'all';
  searchTerm: string = '';

  // Modal state
  selectedProduct: Product | null = null;
  modalQuantity: number = 1;

  ngOnInit(): void {
    this.applyFilters();
  }

  // Filter products based on category and search term
  applyFilters(): void {
    let products = this.allProducts;

    // Apply category filter
    if (this.currentFilter !== 'all') {
      products = products.filter(
        (product) => product.category === this.currentFilter
      );
    }

    // Apply search filter
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
      );
    }

    this.filteredProducts = products;
  }

  // Handle filter selection
  selectFilter(filterValue: string): void {
    this.currentFilter = filterValue;
    this.applyFilters();
  }

  // Handle search
  onSearch(): void {
    this.applyFilters();
  }

  // Add to cart functionality
  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
    alert(`${product.name} added to cart!`);
  }

  // Set selected product for modal (called by Bootstrap modal trigger)
  setSelectedProduct(product: Product): void {
    this.selectedProduct = product;
    this.modalQuantity = 1;
  }

  increaseQuantity(): void {
    this.modalQuantity++;
  }

  decreaseQuantity(): void {
    if (this.modalQuantity > 1) {
      this.modalQuantity--;
    }
  }

  addToCartFromModal(): void {
    if (this.selectedProduct) {
      console.log(
        `Added ${this.modalQuantity} x ${this.selectedProduct.name} to cart`
      );
      alert(
        `${this.modalQuantity} x ${this.selectedProduct.name} added to cart!`
      );
      // Modal will close automatically due to data-bs-dismiss="modal"
    }
  }

  checkoutNow(): void {
    if (this.selectedProduct) {
      console.log(
        `Checkout: ${this.modalQuantity} x ${this.selectedProduct.name}`
      );
      alert(
        `Proceeding to checkout with ${this.modalQuantity} x ${this.selectedProduct.name}!`
      );
      // Modal will close automatically due to data-bs-dismiss="modal"
      // Add your checkout logic here
    }
  }
}
