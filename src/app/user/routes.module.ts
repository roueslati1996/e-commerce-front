import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { AddressComponent } from './cart/address/address.component';
import { CartProductCardComponent } from './cart/cart-product-card/cart-product-card.component';
import { OrderSummaryComponent } from './cart/order-summary/order-summary.component';
import { CartComponent } from './cart/view-cart/cart.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductComponent } from './products/view-product-details/product.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ViewProductsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'products/details',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ViewProductsComponent,
    ProductCardComponent,
    ProductComponent,
    CartComponent,
    OrderSummaryComponent,
    CartProductCardComponent,
    AddressComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class Module {}
