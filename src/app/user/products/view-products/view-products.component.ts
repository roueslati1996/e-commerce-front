import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent {
  products: Array<any> = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log('products :', this.products);
    });

    console.log('products :', this.products);
  }
}
