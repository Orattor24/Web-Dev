import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() remove = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  // Метод для удаления (сообщает родителю ID товара) [cite: 77, 78]
  deleteProduct() {
    this.remove.emit(this.product.id);
  }

  // Твой старый метод шеринга остается здесь [cite: 67, 96]
  shareToWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
}
