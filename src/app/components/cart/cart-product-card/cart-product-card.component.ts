
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
})
export class CartProductCardComponent {
  quantity: number = 2;

  ngOnInit() {
    console.log(this.quantity);
  }

  upgradeQuantity(): void {
    this.quantity = this.quantity + 1;
  }

  downgradeQuantity(): void {
    if (this.quantity > 0) this.quantity = this.quantity - 1;
  }

  removeQuantity(): void {
    this.quantity = 0;
  }
}
