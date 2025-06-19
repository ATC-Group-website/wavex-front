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
  selector: 'app-shop',
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  // Product data
  allProducts: Product[] = [
    {
      id: 1,
      name: 'WaveX Balance Board Pro',
      price: 599,
      image: '/images/temp.png',
      category: 'Balance Board',
      description: 'Professional balance training board',
    },
    {
      id: 2,
      name: 'WaveX Balance Board Elite',
      price: 799,
      image: '/images/temp-2.png',
      category: 'Balance Board',
      description: 'Elite level balance training',
    },
    {
      id: 3,
      name: 'Performance Training Socks',
      price: 149,
      image: '/images/temp-3.png',
      category: 'Socks',
      description: 'High-performance training socks',
    },
    {
      id: 4,
      name: 'Grip Training Socks',
      price: 129,
      image: '/images/temp.png',
      category: 'Socks',
      description: 'Non-slip grip socks for training',
    },
    {
      id: 5,
      name: 'Heavy Resistance Band Set',
      price: 299,
      image: '/images/temp-2.png',
      category: 'Resistance Band Set',
      description: 'Complete resistance band training kit',
    },
    {
      id: 6,
      name: 'Light Resistance Band Set',
      price: 199,
      image: '/images/temp-3.png',
      category: 'Resistance Band Set',
      description: 'Perfect for beginners and rehabilitation',
    },
    {
      id: 7,
      name: 'WaveX Quick-Dry Towel',
      price: 89,
      image: '/images/temp.png',
      category: 'Towels',
      description: 'Microfiber quick-dry training towel',
    },
    {
      id: 8,
      name: 'Premium Gym Towel',
      price: 119,
      image: '/images/temp-2.png',
      category: 'Towels',
      description: 'Premium cotton gym towel',
    },
    {
      id: 9,
      name: 'WaveX Training Bag',
      price: 399,
      image: '/images/temp-3.png',
      category: 'Bags',
      description: 'Professional training equipment bag',
    },
    {
      id: 10,
      name: 'Compact Gym Bag',
      price: 249,
      image: '/images/temp.png',
      category: 'Bags',
      description: 'Compact bag for daily workouts',
    },
    {
      id: 11,
      name: 'Stainless Steel Water Bottle',
      price: 179,
      image: '/images/temp-2.png',
      category: 'bottles',
      description: 'Insulated stainless steel bottle',
    },
    {
      id: 12,
      name: 'Sports Water Bottle',
      price: 99,
      image: '/images/temp-3.png',
      category: 'bottles',
      description: 'BPA-free sports water bottle',
    },
    {
      id: 13,
      name: 'Complete Training Kit',
      price: 899,
      image: '/images/temp.png',
      category: 'Training Kit',
      description: 'Everything you need to start training',
    },
    {
      id: 14,
      name: 'Beginner Training Kit',
      price: 599,
      image: '/images/temp-2.png',
      category: 'Training Kit',
      description: 'Perfect starter kit for beginners',
    },
    {
      id: 15,
      name: 'WaveX Performance T-Shirt',
      price: 199,
      image: '/images/temp-3.png',
      category: 'Apparel Collection',
      description: 'Moisture-wicking performance tee',
    },
    {
      id: 16,
      name: 'WaveX Training Shorts',
      price: 169,
      image: '/images/temp.png',
      category: 'Apparel Collection',
      description: 'Flexible training shorts',
    },
    {
      id: 17,
      name: 'Online Training Program',
      price: 299,
      image: '/images/temp-2.png',
      category: 'Digital Products',
      description: '12-week online training program',
    },
    {
      id: 18,
      name: 'Nutrition Guide PDF',
      price: 99,
      image: '/images/temp-3.png',
      category: 'Digital Products',
      description: 'Complete nutrition and meal planning guide',
    },
    {
      id: 19,
      name: 'Advanced Balance Board',
      price: 699,
      image: '/images/temp.png',
      category: 'Balance Board',
      description: 'Advanced balance training system',
    },
    {
      id: 20,
      name: 'Professional Training Towel Set',
      price: 159,
      image: '/images/temp-2.png',
      category: 'Towels',
      description: 'Set of 3 professional training towels',
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
    { name: 'bottles', value: 'bottles', icon: 'fas fa-circle' },
    { name: 'Training Kit', value: 'Training Kit', icon: 'fas fa-circle' },
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
  ];

  // State variables
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  currentFilter: string = 'all';
  searchTerm: string = '';
  currentPage: number = 1;
  productsPerPage: number = 9;
  totalPages: number = 0;

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
    this.totalPages = Math.ceil(
      this.filteredProducts.length / this.productsPerPage
    );
    this.currentPage = 1; // Reset to first page when filters change
    this.updateDisplayedProducts();
  }

  // Update displayed products based on current page
  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
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

  // Pagination methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedProducts();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  // Get page numbers for pagination
  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
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
