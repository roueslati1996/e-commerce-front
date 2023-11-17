import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddressComponent } from './pages/address/address.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

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
