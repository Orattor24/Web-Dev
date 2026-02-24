import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { products, categories } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('online-store');

  categories = categories;
  products = products;
  selectedCategory: number | null = null;

  selectCategory(id: number) {
    this.selectedCategory = id;
  }

  get filteredProducts() {
    return this.products.filter(p => p.categoryId === this.selectedCategory);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
