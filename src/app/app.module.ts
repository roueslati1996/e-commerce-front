import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddressComponent } from './pages/address/address.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ShopComponent,
    ProductComponent,
    CartComponent,
    AddressComponent,
    ShippingComponent,
    ProductCardComponent,
    OrderSummaryComponent,
    CartProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
