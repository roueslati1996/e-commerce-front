import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { OrdersComponent } from './orders/orders-list/orders.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
];

@NgModule({
  declarations: [UsersComponent, OrdersComponent, ProductsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class Module {}
