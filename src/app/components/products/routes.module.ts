import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';

import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ViewProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/details',
    component: ViewProductsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  declarations: [ViewProductsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ViewProductsComponent],
})
export class Module {}
