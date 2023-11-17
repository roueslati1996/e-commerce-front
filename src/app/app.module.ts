import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/products/view-product-details/product.component';
import { CartComponent } from './components/cart/view-cart/cart.component';
import { AddressComponent } from './components/cart/address/address.component';
import { ShippingComponent } from './components/cart/shipping/shipping.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { OrderSummaryComponent } from './components/cart/order-summary/order-summary.component';
import { CartProductCardComponent } from './components/cart/cart-product-card/cart-product-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
