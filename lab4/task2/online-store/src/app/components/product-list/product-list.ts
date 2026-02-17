import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  selectedImages: { [key: number]: string } = {};

  getProductImage(product: Product): string {
    return this.selectedImages[product.id] || product.image;
  }

  changeImage(productId: number, imageUrl: string) {
    this.selectedImages[productId] = imageUrl;
  }

  share(product: Product, platform: 'wa' | 'tg') {
    const encodedLink = encodeURIComponent(product.link);
    const messageText = `Check out this product: ${product.name}`;
    const encodedText = encodeURIComponent(messageText);

    let url = '';
    if (platform === 'wa') {
      url = `https://wa.me/?text=${encodedText}%20${encodedLink}`;
    } else {
      url = `https://t.me/share/url?url=${encodedLink}&text=${encodedText}`;
    }
    
    window.open(url, '_blank');
  }
}