import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], 
  template: `
    <main>
      <h1>Welcome to Kaspi Store</h1>
      <app-product-list></app-product-list> 
    </main>
  `,
  styleUrls: ['./app.css']
})
export class App { }