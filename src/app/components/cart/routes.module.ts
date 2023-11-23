import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './view-cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'shipping',
    component: ShippingComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];

@NgModule({
  declarations: [ShippingComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ShippingComponent],
})
export class Module {}
