import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor() {}

  @Input() product: any;

  reduction: number = -36;
  price: number = 36.99;
  oldPrice: number = 48.56;

  oneProduct = {
    id: 545454,
    date: '21 June 2020, 12:42 AM',
    title: 'Space for a small ',
    description: 'Space for a small product description',
    image:
      'https://img.edilportale.com/product-thumbs/b_Moroso_LOVELAND_jgScJnXjZB.jpeg',
    price: 82.46,
    oldPrice: 182.46,
    quantity: 12,
  };

  addToCartHandler(): void {
    console.log('product added!');
  }
}
