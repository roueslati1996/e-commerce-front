import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddressComponent } from './pages/address/address.component';
import { ShippingComponent } from './pages/shipping/shipping.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/routes.module').then((m) => m.Module),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/routes.module').then((m) => m.Module),
  },

  { path: 'shop', component: ShopComponent },
  { path: 'collective', component: ShopComponent },
  { path: 'designers', component: ShopComponent },
  { path: 'about-us', component: ShopComponent },
  { path: 'contact-us', component: ShopComponent },

  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
