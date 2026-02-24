import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list'; 
import { CommonModule } from '@angular/common';
import { CATEGORIES } from '../data/products';
import { RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent,], 
  template: `
    <main>
      <h1>Welcome to Kaspi Store</h1>
      <app-product-list></app-product-list> 
    </main>
  `,
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'Online Store';
  categories = CATEGORIES;
  selectedCategoryId: number | null = null;

  selectedCategory(id: number){
    this.selectedCategoryId = id;
  }
}