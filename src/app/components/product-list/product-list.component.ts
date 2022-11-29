import { ProductService } from './../../services/product.service';
import { AddProduct } from './../../store/actions/cart-actions';
import { Store } from '@ngrx/store';
import { IProduct } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  cart: IProduct[] = [];
  constructor(private store: Store<any>) {}
  products: IProduct[] = [
    { id: 1, name: 'Elma', unitPrice: 15 },
    { id: 2, name: 'Armut', unitPrice: 15 },
    { id: 3, name: 'Karpuz', unitPrice: 15 },
    { id: 4, name: 'İncir', unitPrice: 15 },
    { id: 5, name: 'İncir', unitPrice: 15 },
  ];
  ngOnInit(): void {
    this.getCart();
  }

  addToCart(product: IProduct) {
    this.store.dispatch(new AddProduct(product));
  }
  getCart() {
    this.store.select('cartReducer').subscribe((state) => (this.cart = state));
  }
}
