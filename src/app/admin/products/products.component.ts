import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  product = {
    id: 545454,
    date: '21 June 2020, 12:42 AM',
    name: 'Guy Hawkins',
    price: 82.46,
    quantity: 12,
  };

  products: Array<any> = [
    {
      id: 545454,
      date: '21 June 2020, 12:42 AM',
      name: 'Guy Hawkins',
      price: 82.46,
      quantity: 12,
    },
    {
      id: 545454,
      date: '21 June 2020, 12:42 AM',
      name: 'Guy Hawkins',
      price: 82.46,
      quantity: 12,
    },
    {
      id: 545454,
      date: '21 June 2020, 12:42 AM',
      name: 'Guy Hawkins',
      price: 82.46,
      quantity: 12,
    },
    {
      id: 545454,
      date: '21 June 2020, 12:42 AM',
      name: 'Guy Hawkins',
      price: 82.46,
      quantity: 12,
    },
  ];
}
