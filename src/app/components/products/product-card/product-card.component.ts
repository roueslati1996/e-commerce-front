import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  reduction: number = -36;
  price: number = 36.99;
  oldPrice: number = 48.56;

  addToCartHandler(): void {
    console.log('product added!');
  }
}
