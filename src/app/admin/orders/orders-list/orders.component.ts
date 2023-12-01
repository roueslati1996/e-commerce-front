import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  order = {
    id: 545454,
    date: '21 June 2020, 12:42 AM',
    name: 'Guy Hawkins',
    price: 82.46,
    quantity: 12,
  };

  orders: Array<any> = [
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
