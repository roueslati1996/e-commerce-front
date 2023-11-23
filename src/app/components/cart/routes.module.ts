import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { AddressComponent } from './address/address.component';
import { CartProductCardComponent } from './cart-product-card/cart-product-card.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartComponent } from './view-cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    CartComponent,
    OrderSummaryComponent,
    CartProductCardComponent,
    AddressComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [
    CartComponent,
    OrderSummaryComponent,
    CartProductCardComponent,
    AddressComponent,
  ],
})
export class Module {}
