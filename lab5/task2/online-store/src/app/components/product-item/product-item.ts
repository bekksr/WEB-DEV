import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() remove = new EventEmitter<number>();

  changeImage(imageUrl: string) {
    this.product.image = imageUrl; 
  }


  like() {
    this.product.likes++; 
  }
  onRemove() {
    if (confirm('Удалить этот товар?')) {
    this.remove.emit(this.product.id);
  }
  }

  share(platform: 'wa' | 'tg') {
    const encodedLink = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    const url = platform === 'wa' 
      ? `https://wa.me/?text=${text}%20${encodedLink}`
      : `https://t.me/share/url?url=${encodedLink}&text=${text}`;
    window.open(url, '_blank');
  }
}