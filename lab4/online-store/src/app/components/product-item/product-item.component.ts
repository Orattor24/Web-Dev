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

  deleteProduct() {
    this.remove.emit(this.product.id);
  }

  handleRemove(id: number){
    this.remove.emit(id);
  }

  shareToWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
  shareToTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}

