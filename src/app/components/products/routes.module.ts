import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductComponent } from './view-product-details/product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'details',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  declarations: [ProductComponent, ViewProductsComponent, ProductCardComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ProductComponent, ViewProductsComponent, ProductCardComponent],
})
export class Module {}
