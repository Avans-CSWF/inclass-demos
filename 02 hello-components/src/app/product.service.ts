import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1, name: "ProdA", description: "Product A", price: 10.5},
    {id: 2, name: "ProdB", description: "Product B", price: 16.95},
    {id: 3, name: "ProdC", description: "Product C", price: 8},
    {id: 4, name: "ProdD", description: "Product D", price: 43.5},
    {id: 5, name: "ProdE", description: "Product E", price: 1.25},
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find( p => p.id == id);
  }
}
