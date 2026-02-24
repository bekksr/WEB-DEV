import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PRODUCTS } from '../../../data/products';
import { Product } from '../../models/product.model';

import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], 
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnChanges {

  @Input() categoryId: number | null = null;

  allProducts: Product[] = PRODUCTS;
  filteredProducts: Product[] = [...PRODUCTS];
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes['categoryId']){
      this.updateFilteredProducts();
    }
    
  }

  updateFilteredProducts(){
    if(this.categoryId){
      this.filteredProducts = this.allProducts.filter(p => p.categoryId === this.categoryId);
    }
  }

  handleRemove(productId: number){
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    this.updateFilteredProducts();
  }
}