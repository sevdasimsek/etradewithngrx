import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: IProduct;
  constructor() {}
  products: IProduct[] = [
    { id: 1, name: 'Elma', unitPrice: 15 },
    { id: 2, name: 'Armut', unitPrice: 15 },
    { id: 3, name: 'Karpuz', unitPrice: 15 },
    { id: 4, name: 'İncir', unitPrice: 15 },
    { id: 5, name: 'İncir', unitPrice: 15 },
  ];
  setProduct(product) {
    this.product = product;
  }
  setProducts(products) {
    this.products = products;
  }
}
